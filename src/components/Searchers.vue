<template>
  <form class="form">
    <input
      type="text"
      placeholder="Busque por um Filme"
      class="form-input"
      v-model="query"
    />
    <button type="submit" class="form-btn">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
export default {
  name: "Searchers",
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  align-items: center;
  width: 100%;
  //   max-width: 420px;
  background-color: var(--clr-txt);
  border: 2px solid var(--clr-accent);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 3rem;

  &-input {
    font-size: 1rem;
    flex: 1;
    outline: none;
    border: none;
    background-color: transparent;
    padding: 0 1rem;

    &::placeholder {
      font-style: italic;
      font-size: 0.9rem;
      color: var(--clr-background);
    }
  }

  &-btn {
    border: none;
    outline: none;
    background-color: var(--clr-background);
    cursor: pointer;

    i {
      padding: 0.5rem;
      font-size: 1rem;
      color: var(--clr-accent);
    }

    &:hover,
    &:active {
      opacity: 0.8;
    }
  }
}
</style>
