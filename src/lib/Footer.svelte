<script lang="ts">
  import { resolve } from '$app/paths';

  import { GITHUB_URL, GITHUB_USER } from './site';

  const year = new Date().getFullYear();
</script>

<footer>
  <p class="mono">
    © {year}
    {GITHUB_USER} ·
    <a href={GITHUB_URL} target="_blank" rel="noreferrer"> GitHub </a>
  </p>
  <p class="legal-links mono">
    <a href={resolve('/privacy-policy')}>隱私權政策</a>
    ·
    <a href={resolve('/terms-of-service')}>服務條款</a>
  </p>
</footer>

<style>
  footer {
    text-align: center;
    padding: 2.5rem 1rem 3rem;
    color: var(--text-soft);
    font-size: 0.8rem;
  }

  footer a {
    color: var(--text-soft);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  footer a:hover {
    color: var(--accent);
  }

  .legal-links {
    margin-top: 0.5rem;
  }
</style>
