<template>
  <div class="loading">
    <i class="fas fa-spinner"></i>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: var(--clr-accent);
    font-size: 5rem;
    animation: rotate infinite 1s;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
