<script lang="ts">
  const groups = [
    {
      title: '語言 / Languages',
      index: '01',
      items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'HTML / CSS', 'SQL'],
    },
    {
      title: '框架 / Frameworks',
      index: '02',
      items: ['Svelte', 'Vue', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
    },
    {
      title: '工具 / Tooling',
      index: '03',
      items: [
        'Vite',
        'Git / GitHub',
        'Docker',
        'Linux',
        'Figma',
        'GitHub Actions',
      ],
    },
    {
      title: '其他 / Others',
      index: '04',
      items: ['REST API', 'Pinia', 'Nginx', 'Postman', 'VS Code', 'Notion'],
    },
  ];
</script>

<section id="skills" class="container">
  <span class="section-kicker">02 / stack</span>
  <h2 class="section-title">
    技能樹 <span class="tag">skills.json</span>
  </h2>

  <div class="grid">
    {#each groups as group (group.title)}
      <div class="glass group">
        <h3>
          <span class="mono index" aria-hidden="true">{group.index}</span>
          {group.title}
        </h3>
        <ul>
          {#each group.items as item (item)}
            <li class="mono">{item}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    padding: clamp(2rem, 4vw, 3rem) 0;
  }

  .grid {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1.25rem;
  }

  .group {
    padding: 1.5rem;
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .group:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-soft);
  }

  .group h3 {
    font-size: 1.05rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .group h3 .index {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
    padding: 0.15rem 0.45rem;
    border-radius: 6px;
  }

  .group ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .group li {
    font-size: 0.8rem;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
    color: var(--text-heading);
  }

  @media (max-width: 860px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
