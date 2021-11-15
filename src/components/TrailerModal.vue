<template>
  <div class="trailer-container">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/-BI6OOYqrxE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "TrailerModal",
};
</script>

<style lang="scss" scoped>
.trailer-container {
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
