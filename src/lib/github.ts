import LANGUAGE_COLORS from '../data/lang-color.json';

export const GITHUB_USER = 'qmkc';

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  topics?: string[];
}

export interface GithubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

const CACHE_TTL = 1000 * 60 * 60;
const CACHE_UPDATES_KEY = 'cache:timestamp';

const getFromCache = <T>(key: string): T | null => {
  try {
    const cached = localStorage.getItem(key);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
};

const setToCache = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    const timestamps =
      getFromCache<Record<string, string>>(CACHE_UPDATES_KEY) || {};
    timestamps[key] = new Date().toISOString();
    localStorage.setItem(CACHE_UPDATES_KEY, JSON.stringify(timestamps));
  } catch {
    return;
  }
};

const isCacheExpired = (key: string) => {
  const timestamps = getFromCache<Record<string, string>>(CACHE_UPDATES_KEY);
  if (!timestamps?.[key]) return true;
  return Date.now() - new Date(timestamps[key]).getTime() > CACHE_TTL;
};

async function ghFetch<T>(path: string): Promise<T> {
  const cacheKey = `gh:${path}`;

  if (!isCacheExpired(cacheKey)) {
    const cached = getFromCache<T>(cacheKey);
    if (cached) return cached;
  }

  try {
    const res = await fetch(`https://api.github.com${path}`, {
      headers: { Accept: 'application/vnd.github+json' },
    });

    if (!res.ok) throw new Error(`GitHub API ${res.status}`);

    const data = (await res.json()) as T;
    setToCache(cacheKey, data);
    return data;
  } catch (error) {
    const staleCache = getFromCache<T>(cacheKey);
    if (staleCache) return staleCache;
    throw error;
  }
}

export function fetchProfile(): Promise<GithubProfile> {
  return ghFetch<GithubProfile>(`/users/${GITHUB_USER}`);
}

export async function fetchTopRepos(limit = 6): Promise<GithubRepo[]> {
  const repos = await ghFetch<GithubRepo[]>(
    `/users/${GITHUB_USER}/repos?per_page=100&sort=stargazers&direction=desc`,
  );

  return repos
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return (
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
    })
    .slice(0, limit);
}

export const languageColor = (lang: string | null): string => {
  if (!lang) return '#c9a7d6';
  return (LANGUAGE_COLORS as Record<string, string>)[lang] ?? '#c9a7d6';
};

export function relativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();

  if (isNaN(diffMs) || diffMs < 0) return '未來';

  const day = 86_400_000;
  const days = Math.floor(diffMs / day);

  if (days < 1) return '今天';
  if (days === 1) return '昨天';
  if (days < 30) return `${days} 天前`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} 個月前`;

  const years = Math.floor(months / 12);
  return `${years} 年前`;
}
