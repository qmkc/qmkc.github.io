<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';

  import CatPawField from '../lib/CatPawField.svelte';
  import PawIcon from '../lib/PawIcon.svelte';
  import { GITHUB_URL, SITE_TITLE } from '../lib/site';

  const notFound = $derived(page.status === 404);
  const message = $derived(
    notFound
      ? '看起來你這隻怪貓走丟了，請確認網址是否正確'
      : (page.error?.message ?? '發生了未預期的錯誤'),
  );
</script>

<svelte:head>
  <title>{page.status} · {SITE_TITLE}</title>
</svelte:head>

<CatPawField />

<div class="error-page">
  <div class="card glass container">
    <span class="paw-icon"><PawIcon size={40} /></span>
    <p class="status mono">{page.status}</p>
    <h1>{notFound ? '頁面走丟了' : '出了一點問題'}</h1>
    <p class="message">{message}</p>
    <div class="cta-row">
      <a class="cta primary" href={resolve('/')}>回到首頁</a>
      <a class="cta ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">
        前往 GitHub
      </a>
    </div>
  </div>
</div>

<style>
  .error-page {
    position: relative;
    z-index: 1;
    min-height: 100svh;
    display: grid;
    place-items: center;
    padding: 2rem 0;
  }

  .card {
    width: min(480px, 92vw);
    padding: clamp(2rem, 5vw, 3rem);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .paw-icon {
    display: inline-flex;
    color: var(--accent);
    animation: sway 5s ease-in-out infinite;
  }

  @keyframes sway {
    0%,
    100% {
      transform: rotate(-8deg);
    }
    50% {
      transform: rotate(8deg);
    }
  }

  .status {
    margin: 1rem 0 0;
    font-size: clamp(2.4rem, 1.8rem + 2vw, 3.4rem);
    font-weight: 700;
    color: var(--accent-2);
    letter-spacing: 0.04em;
  }

  h1 {
    margin-top: 0.25rem;
    font-size: clamp(1.3rem, 1.1rem + 0.6vw, 1.6rem);
  }

  .message {
    margin-top: 0.75rem;
    color: var(--text-soft);
    line-height: 1.8;
  }

  .cta-row {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem 1.4rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .cta.primary {
    background: var(--accent-500);
    color: #fff;
    box-shadow: var(--shadow-soft);
  }

  .cta.ghost {
    border: 1px solid var(--border);
    color: var(--text-heading);
    background: var(--surface);
  }

  .cta:hover {
    transform: translateY(-3px);
  }
</style>
