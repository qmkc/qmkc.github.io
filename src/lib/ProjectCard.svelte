<script lang="ts">
  import { languageColor, relativeTime, type GithubRepo } from './github';
  import ExternalLinkIcon from './ExternalLinkIcon.svelte';

  let { repo }: { repo: GithubRepo } = $props();
</script>

<a class="glass card" href={repo.html_url} target="_blank" rel="noreferrer">
  <div class="head">
    <h3>{repo.name}</h3>
    <span class="arrow"><ExternalLinkIcon size={15} /></span>
  </div>
  <p class="desc">{repo.description ?? '// 這個專案還沒有寫描述'}</p>
  <div class="meta mono">
    {#if repo.language}
      <span class="lang">
        <i style="background:{languageColor(repo.language)}"></i>
        {repo.language}
      </span>
    {/if}
    <span title="stars">
      <svg
        viewBox="0 0 16 16"
        width="13"
        height="13"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
        />
      </svg>
      {repo.stargazers_count}
    </span>
    <span title="forks">
      <svg
        viewBox="0 0 16 16"
        width="13"
        height="13"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878ZM8.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        />
      </svg>
      {repo.forks_count}
    </span>
    <span class="updated">更新於 {relativeTime(repo.updated_at)}</span>
  </div>
</a>

<style>
  .card {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 1.4rem;
    text-decoration: none;
    color: inherit;
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease,
      border-color 0.25s ease;
    height: 100%;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-soft);
    border-color: var(--accent);
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  h3 {
    font-size: 1.05rem;
    word-break: break-word;
  }

  .arrow {
    display: inline-flex;
    color: var(--accent);
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  .card:hover .arrow {
    transform: translate(2px, -2px);
  }

  .desc {
    margin: 0;
    color: var(--text-soft);
    font-size: 0.9rem;
    line-height: 1.6;
    flex-grow: 1;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    font-size: 0.75rem;
    color: var(--text-soft);
    align-items: center;
  }

  .lang {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .lang i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
  }

  .meta span[title] {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }

  .updated {
    margin-left: auto;
  }
</style>
