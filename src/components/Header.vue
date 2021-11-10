<template>
  <header>
    <div class="container">
      <div class="header">
        <router-link :to="{ name: 'Home' }" class="logo">
          <h1>Busque por Filmes</h1>
        </router-link>
        <router-link to="#" class="favorite-link">
          <span>Meus Favoritos</span>
          <i class="fas fa-heart"></i>
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

    .favorite-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.1rem;

      @media (max-width: 575.98px) {
        i {
          font-size: 1.5rem;
        }
        span {
          display: none;
        }
      }
      &:hover,
      &:active {
        color: var(--clr-txt);
      }
    }
  }
}
</style>
