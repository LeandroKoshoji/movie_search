<template>
  <footer>
    <div class="container">
      <div class="footer">
        <p>
          Coded by:
          <a href="https://github.com/LeandroKoshoji">Leandro Koshoji Araujo</a>
        </p>
        <div class="mail">
          <i class="fas fa-envelope"></i>
          <span>leandro.koshoji@gmail.com</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  height: 80px;
  margin-top: 5rem;
  padding: 1rem 0;
  p,
  span {
    font-style: italic;
    font-size: 0.9rem;
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      color: var(--clr-accent);
      margin-right: 0.5rem;
    }
  }
}
</style>
