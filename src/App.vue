<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
  width: Min(90%, 80rem);
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
