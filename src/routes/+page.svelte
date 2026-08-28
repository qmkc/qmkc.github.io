<script lang="ts">
  import CatPawField from '../lib/CatPawField.svelte';
  import Header from '../lib/Header.svelte';
  import Hero from '../lib/Hero.svelte';
  import About from '../lib/About.svelte';
  import Skills from '../lib/Skills.svelte';
  import Projects from '../lib/Projects.svelte';
  import Footer from '../lib/Footer.svelte';
  import { SITE_TITLE } from '../lib/site';
</script>

<svelte:head>
  <title>{SITE_TITLE}</title>
</svelte:head>

<CatPawField />

<div class="page">
  <Header />
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </main>
</div>

<style>
  .page {
    position: relative;
    z-index: 1;
  }
</style>
