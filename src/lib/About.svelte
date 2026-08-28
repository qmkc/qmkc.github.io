<script lang="ts">
  import { fetchProfile, GITHUB_USER, type GithubProfile } from './github';

  let profile = $state<GithubProfile | null>(null);
  let failed = $state(false);

  $effect(() => {
    fetchProfile()
      .then((p) => (profile = p))
      .catch(() => (failed = true));
  });

  const stats = $derived([
    { label: 'Public Repos', value: profile?.public_repos ?? '-' },
    { label: 'Followers', value: profile?.followers ?? '-' },
    { label: 'Following', value: profile?.following ?? '-' },
  ]);
</script>

<section id="about" class="container">
  <span class="section-kicker">01 / whoami</span>
  <h2 class="section-title">
    關於我 <span class="tag">about.md</span>
  </h2>

  <div class="about-grid">
    <div class="glass card bio-card">
      <p class="placeholder">
        Hi, I'm <strong class="mono">{GITHUB_USER}</strong> - 一隻快在 GitHub 上迷路的貓，喜歡在程式碼裡打滾、在硬體裡鑽洞，也喜歡在網路上追逐光點。
      </p>

      <dl class="facts mono">
        <div class="row">
          <dt>roles</dt>
          <dd>
            <div>在學學生</div>
            <div>全端開發工程師</div>
            <div>硬體開發愛好者</div>
          </dd>
        </div>
        <div class="row">
          <dt>focus</dt>
          <dd>前後端開發、資料庫管理、網路架構、硬體開發</dd>
        </div>
        <div class="row">
          <dt>location</dt>
          <dd>Taiwan</dd>
        </div>
        <div class="row">
          <dt>email</dt>
          <dd>
            <a href="mailto:hi@qmkc.dev" class="mono link">
              <span class="placeholder"> hi@qmkc.dev </span>
            </a>
          </dd>
        </div>
      </dl>

      {#if failed}
        <p class="hint mono">[!] GitHub 資料暫時抓不到，稍後重新整理看看。</p>
      {/if}
    </div>

    <div class="stats">
      {#each stats as s (s.label)}
        <div class="glass stat">
          <span class="value mono">{s.value}</span>
          <span class="label">{s.label}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    padding: clamp(2rem, 4vw, 3rem) 0;
  }

  .about-grid {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 1.25rem;
  }

  .card {
    padding: clamp(1.5rem, 3vw, 2.25rem);
  }

  .bio-card p {
    margin: 0 0 1rem;
    line-height: 1.9;
    color: var(--text);
  }

  .bio-card p:last-of-type {
    margin-bottom: 0;
  }

  .placeholder {
    color: var(--text-soft);
    font-size: 0.95rem;
  }

  .facts {
    margin: 1.5rem 0 0;
    padding-top: 1.25rem;
    border-top: 1px dashed var(--border);
    display: grid;
    gap: 0.55rem;
  }

  .facts .row {
    display: flex;
    gap: 0.9rem;
    font-size: 0.85rem;
  }

  .facts dt {
    flex: 0 0 6.5em;
    white-space: nowrap;
    color: var(--accent);
  }

  .facts dt::before {
    content: '> ';
    color: var(--accent-2);
  }

  .facts dd {
    margin: 0;
    color: var(--text);
  }

  .hint {
    margin-top: 1rem;
    font-size: 0.8rem;
    color: var(--accent-2);
  }

  .stats {
    display: grid;
    gap: 1rem;
    align-content: start;
  }

  .stat {
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .stat .value {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--accent);
  }

  .stat .label {
    font-size: 0.8rem;
    color: var(--text-soft);
  }

  @media (max-width: 760px) {
    .about-grid {
      grid-template-columns: 1fr;
    }
    .stats {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
