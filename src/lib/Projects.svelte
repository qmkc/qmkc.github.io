<script lang="ts">
  import { fetchTopRepos, GITHUB_USER, type GithubRepo } from './github';
  import ProjectCard from './ProjectCard.svelte';
  import ExternalLinkIcon from './ExternalLinkIcon.svelte';

  let repos = $state<GithubRepo[] | null>(null);
  let error = $state(false);

  $effect(() => {
    fetchTopRepos(100)
      .then((r) => (repos = r.slice(0, 12)))
      .catch(() => (error = true));
  });
</script>

<section id="projects" class="container">
  <span class="section-kicker">03 / build</span>
  <h2 class="section-title">
    精選專案 <span class="tag">projects --sort=stars</span>
  </h2>

  {#if error}
    <div class="glass empty">
      <p>[!] 暫時抓不到 GitHub 資料（可能是額度限制），可以直接前往查看：</p>
      <a
        class="mono link"
        href={`https://github.com/${GITHUB_USER}?tab=repositories`}
        target="_blank"
        rel="noreferrer"
      >
        github.com/{GITHUB_USER}?tab=repositories <ExternalLinkIcon size={13} />
      </a>
    </div>
  {:else if !repos}
    <div class="grid">
      {#each Array(12) as _, i (i)}
        <div class="glass skeleton"></div>
      {/each}
    </div>
  {:else if repos.length === 0}
    <div class="glass empty">
      <p>目前還沒有公開的 repository，敬請期待</p>
    </div>
  {:else}
    <div class="grid">
      {#each repos as repo (repo.id)}
        <ProjectCard {repo} />
      {/each}
    </div>
  {/if}
</section>

<style>
  section {
    padding: clamp(2rem, 4vw, 3rem) 0;
  }

  .section-title {
    margin-bottom: 1.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  .skeleton {
    height: 160px;
    position: relative;
    overflow: hidden;
  }

  .skeleton::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      100deg,
      transparent 30%,
      color-mix(in srgb, var(--accent) 15%, transparent) 50%,
      transparent 70%
    );
    animation: shimmer 1.6s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .empty {
    padding: 2rem;
    text-align: center;
    color: var(--text-soft);
  }

  .link {
    color: var(--accent-2);
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 860px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
