<template>
  <div class="wrapper-out" @click="closeModal()">
    <div class="wrapper-inner">
      <div class="trailer-container">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/${link}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrailerModal",
  props: {
    link: {
      required: true,
      type: String,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-out {
  z-index: 999;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);

  .wrapper-inner {
    padding-top: 25vh;
    max-width: 660px;
    max-height: 415px;
    margin: 0 auto;

    .trailer-container {
      position: relative;
      padding-bottom: 56.25%;
      // padding-top: 30px;
      height: 0;
      overflow: hidden;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
