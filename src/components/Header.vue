<template>
  <header>
    <div class="container">
      <div class="header">
        <router-link :to="{ name: 'Home' }" class="logo">
          <h1>Busque por Filmes</h1>
        </router-link>
        <router-link :to="{ name: 'Home' }" v-if="$route.name !== 'Home'">
          <i class="fas fa-long-arrow-alt-left"></i>
          <span class="router-span">Home</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--clr-accent);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 575.98px) {
      flex-direction: column;
    }

    .router-span {
      padding-left: 0.5rem;
    }
  }
}
</style>
