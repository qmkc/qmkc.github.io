<script lang="ts">
  interface Paw {
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
    drift: number;
    alt: boolean;
    spin: number;
  }

  const COUNT = 20;

  const random = (seed: number): number => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const paws: Paw[] = Array.from({ length: COUNT }, (_, i) => {
    const left = ((i + 0.5) / COUNT) * 100 + (random(i * 7 + 1) - 0.5) * 6;

    return {
      id: i,
      left,
      delay: -random(i * 7 + 2) * 20,
      duration: 15 + random(i * 7 + 3) * 12,
      size: 16 + random(i * 7 + 4) * 14,
      drift: 40 + random(i * 7 + 5) * 80,
      alt: random(i * 7 + 6) > 0.5,
      spin: 40 * (random(i * 7 + 7) > 0.5 ? 1 : -1),
    };
  });
</script>

<div class="paw-field" aria-hidden="true">
  {#each paws as p (p.id)}
    <svg
      class="paw"
      class:alt={p.alt}
      viewBox="0 0 64 64"
      style="left:{p.left}%;--delay:{p.delay}s;--duration:{p.duration}s;--size:{p.size}px;--drift:{p.drift}px;--spin:{p.spin}deg;"
    >
      <ellipse cx="32" cy="44" rx="15" ry="13" />
      <ellipse cx="13" cy="26" rx="7" ry="9" />
      <ellipse cx="27" cy="12" rx="7" ry="9" />
      <ellipse cx="41" cy="12" rx="7" ry="9" />
      <ellipse cx="53" cy="27" rx="6.5" ry="8.5" />
    </svg>
  {/each}
</div>

<style>
  .paw-field {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .paw {
    position: absolute;
    top: -5%;
    width: var(--size);
    height: var(--size);
    fill: var(--accent-400);
    opacity: 0.4;
    animation: fall var(--duration) linear var(--delay) infinite;
    filter: drop-shadow(0 2px 4px rgba(8, 145, 178, 0.2));
  }

  .paw.alt {
    fill: var(--violet-400);
    filter: drop-shadow(0 2px 4px rgba(109, 91, 208, 0.2));
  }

  @keyframes fall {
    0% {
      transform: translate3d(0, -10vh, 0) rotate(0deg);
      opacity: 0;
    }
    8% {
      opacity: 0.4;
    }
    92% {
      opacity: 0.3;
    }
    100% {
      transform: translate3d(var(--drift), 110vh, 0) rotate(var(--spin));
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .paw-field {
      display: none;
    }
  }
</style>
