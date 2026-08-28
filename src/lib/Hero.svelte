<script lang="ts">
  import { GITHUB_USER } from './github';
  import ExternalLinkIcon from './ExternalLinkIcon.svelte';

  const avatar = `https://github.com/${GITHUB_USER}.png?size=240`;

  const roles = ['在學學生', '全端開發工程師', '硬體開發愛好者'];
  let roleIndex = $state(0);

  $effect(() => {
    const id = setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
    }, 2600);
    return () => clearInterval(id);
  });
</script>

<section id="top" class="hero">
  <div class="container hero-inner">
    <div class="hero-text">
      <span class="section-kicker">&lt; 歡迎光臨 / welcome &gt;</span>
      <h1>
        嗨，我是
        <span class="name">{GITHUB_USER}</span>
      </h1>
      <p class="role mono">
        <span class="prompt">$</span>
        {#key roleIndex}
          <span class="role-text">{roles[roleIndex]}</span>
        {/key}
      </p>
      <p class="bio">
        歡迎來到我的個人頁面 - 這裡記錄著我的作品與技術足跡。
        <br />
        <!-- <span class="placeholder"></span> -->
      </p>
      <div class="cta-row">
        <a class="cta primary" href="#projects">看看我的專案</a>
        <a
          class="cta ghost"
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
        >
          前往 GitHub Profile <ExternalLinkIcon size={13} />
        </a>
      </div>
    </div>

    <div class="hero-avatar">
      <div class="ring"></div>
      <img src={avatar} alt="{GITHUB_USER} 的頭像" loading="eager" />
      <span class="badge mono">online</span>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: clamp(4rem, 6vw, 6rem) 0 clamp(3rem, 5vw, 4rem);
  }

  .hero-inner {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
    gap: clamp(2rem, 5vw, 4rem);
  }

  .name {
    color: var(--accent);
  }

  h1 {
    font-size: clamp(2.2rem, 1.6rem + 2.6vw, 3.4rem);
    display: flex;
    align-items: center;
    gap: 0.4rem;
    flex-wrap: wrap;
  }

  .role {
    margin-top: 1rem;
    font-size: 1.05rem;
    min-height: 1.6em;
    display: flex;
    gap: 0.5rem;
    color: var(--accent-2);
    align-items: center;
  }

  .prompt {
    color: var(--accent);
  }

  .role-text {
    animation: type-in 0.4s ease;
  }

  @keyframes type-in {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .bio {
    margin-top: 1.25rem;
    color: var(--text-soft);
    line-height: 1.8;
    max-width: 40em;
  }

  /* .placeholder {
    font-size: 0.9em;
    opacity: 0.75;
  } */

  .cta-row {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
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

  .hero-avatar {
    position: relative;
    display: grid;
    place-items: center;
    justify-self: center;
  }

  .hero-avatar img {
    width: clamp(160px, 22vw, 220px);
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--surface-strong);
    box-shadow: var(--shadow-soft);
    position: relative;
    z-index: 1;
  }

  .ring {
    position: absolute;
    inset: -14px;
    border-radius: 50%;
    background: var(--accent-400);
    filter: blur(10px);
    animation: ring-pulse 3s ease-in-out infinite;
    opacity: 0.35;
  }

  @keyframes ring-pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.45;
    }
  }

  .badge {
    position: absolute;
    bottom: 6%;
    right: 4%;
    z-index: 2;
    background: var(--mint-300);
    color: #14532d;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    border: 2px solid var(--bg-1);
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .badge::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6);
    animation: pulse 1.8s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
    }
  }

  @media (max-width: 860px) {
    .hero-inner {
      grid-template-columns: 1fr;
      text-align: center;
    }
    h1,
    .role,
    .cta-row {
      justify-content: center;
    }
    .bio {
      margin-inline: auto;
    }
    .hero-avatar {
      order: -1;
    }
  }
</style>
