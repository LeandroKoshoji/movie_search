<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&family=Poppins:wght@400;700&display=swap");
:root {
  --clr-background: #14213d;
  --clr-accent: #fca311;
  --clr-neutral: #e5e5e5;
  --clr-txt: #ffffff;
  --box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 8px 0px;
  --font-family: "Poppins", sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: var(--font-family);
}

body {
  background-color: var(--clr-background);
  color: var(--clr-txt);
  min-height: 100vh;
}

.container {
  width: Min(95%, 80rem);
  margin: 0 auto;
}

img {
  display: block;
  width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
