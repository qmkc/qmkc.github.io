<script lang="ts">
  import type { Snippet } from 'svelte';
  import { resolve } from '$app/paths';

  import CatPawField from './CatPawField.svelte';
  import Footer from './Footer.svelte';
  import PawIcon from './PawIcon.svelte';
  import { LOGO_TEXT, SITE_TITLE } from './site';

  let {
    title,
    updated,
    children,
  }: { title: string; updated: string; children: Snippet } = $props();
</script>

<svelte:head>
  <title>{title} · {SITE_TITLE}</title>
</svelte:head>

<CatPawField />

<div class="legal-page">
  <div class="top container">
    <a class="logo" href={resolve('/')}>
      <span class="paw-icon"><PawIcon size={18} /></span>
      <span class="logo-text mono">{LOGO_TEXT}</span>
    </a>
    <a class="back" href={resolve('/')}>← 回到首頁</a>
  </div>

  <main class="container">
    <article class="glass card">
      <span class="section-kicker">Legal</span>
      <h1>{title}</h1>
      <p class="updated mono">最後更新：{updated}</p>

      <div class="prose">
        {@render children()}
      </div>
    </article>
  </main>

  <Footer />
</div>

<style>
  .legal-page {
    position: relative;
    z-index: 1;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.5rem 0 0;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    text-decoration: none;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--text-heading);
  }

  .paw-icon {
    display: inline-flex;
    color: var(--accent);
  }

  .back {
    text-decoration: none;
    font-size: 0.9rem;
    color: var(--text-soft);
    transition: color 0.2s ease;
  }

  .back:hover {
    color: var(--accent);
  }

  main {
    flex: 1;
    padding: 2rem 0 3rem;
  }

  .card {
    padding: clamp(1.75rem, 4vw, 3rem);
  }

  h1 {
    margin-top: 0.5rem;
    font-size: clamp(1.5rem, 1.2rem + 1vw, 2rem);
  }

  .updated {
    margin: 0.5rem 0 0;
    color: var(--text-soft);
    font-size: 0.85rem;
  }

  .prose {
    margin-top: 1.75rem;
    color: var(--text);
    line-height: 1.9;
  }

  .prose :global(h2) {
    font-size: 1.15rem;
    margin: 2rem 0 0.75rem;
  }

  .prose :global(h2:first-child) {
    margin-top: 0;
  }

  .prose :global(p) {
    margin: 0 0 1rem;
  }

  .prose :global(ul),
  .prose :global(ol) {
    margin: 0 0 1rem;
    padding-left: 1.4em;
    display: grid;
    gap: 0.4em;
  }

  .prose :global(strong) {
    color: var(--text-heading);
  }

  .prose :global(a) {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }

  .prose :global(a:hover) {
    color: var(--accent-2);
  }
</style>
