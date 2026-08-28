<script lang="ts">
  import { GITHUB_USER } from './github';

  const year = new Date().getFullYear();
</script>

<footer>
  <p class="mono">
    © {year}
    {GITHUB_USER} ·
    <a
      href={`https://github.com/${GITHUB_USER}`}
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  </p>
</footer>

<style>
  footer {
    text-align: center;
    padding: 2.5rem 1rem 3rem;
    color: var(--text-soft);
    font-size: 0.8rem;
  }
</style>
