<script lang="ts">
  import ThemeToggle from './ThemeToggle.svelte';
  import PawIcon from './PawIcon.svelte';

  const links = [
    { href: '#about', label: '關於我', tag: 'about' },
    { href: '#skills', label: '技能', tag: 'skills' },
    { href: '#projects', label: '專案', tag: 'projects' },
  ];
</script>

<header class="glass">
  <div class="bar container">
    <a class="logo" href="#top">
      <span class="paw-icon"><PawIcon size={18} /></span>
      <span class="logo-text">qmkc<span class="cursor mono">_</span></span>
    </a>
    <nav>
      <ul>
        {#each links as link (link.tag)}
          <li><a href={link.href}>{link.label}</a></li>
        {/each}
      </ul>
    </nav>
    <div class="actions">
      <a
        class="gh-btn mono"
        href="https://github.com/qmkc"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
          />
        </svg>
        GitHub
      </a>
      <ThemeToggle />
    </div>
  </div>
</header>

<style>
  header {
    position: sticky;
    top: 0.75rem;
    z-index: 30;
    margin: 0.75rem auto 0;
    width: min(1080px, 92vw);
    border-radius: 999px;
    padding: 0.5rem 0.5rem 0.5rem 1.1rem;
  }

  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
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

  .cursor {
    color: var(--accent);
    animation: blink 1.1s steps(2) infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  nav ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav a {
    text-decoration: none;
    font-weight: 500;
    color: var(--text-soft);
    font-size: 0.95rem;
    transition: color 0.2s ease;
  }

  nav a:hover {
    color: var(--accent);
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .gh-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    text-decoration: none;
    background: var(--text-heading);
    color: var(--bg-1);
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 500;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .gh-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-soft);
  }

  @media (max-width: 720px) {
    nav {
      display: none;
    }
  }
</style>
