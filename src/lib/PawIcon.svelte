<script lang="ts">
  let { size = 18 }: { size?: number } = $props();
</script>

<svg
  viewBox="0 0 64 64"
  width={size}
  height={size}
  fill="currentColor"
  aria-hidden="true"
>
  <ellipse cx="32" cy="44" rx="15" ry="13" />
  <ellipse cx="13" cy="26" rx="7" ry="9" />
  <ellipse cx="27" cy="12" rx="7" ry="9" />
  <ellipse cx="41" cy="12" rx="7" ry="9" />
  <ellipse cx="53" cy="27" rx="6.5" ry="8.5" />
</svg>
