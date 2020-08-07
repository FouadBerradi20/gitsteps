<template>
  <div class="not_found">
    <h1>404</h1>

    <h2 class="title-2">Page Not Found</h2>

    <p
      class="text"
    >It looks like nothing was found at this location. click the link below to go back home.</p>

    <button @click="redirect" class="cta">BACK TO HOME</button>

    <img src="../assets/notfound.svg" alt="not_found_bg" />
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push('/dashboard/stats')
    }
  }
}
</script>

<style lang="scss">
.not_found {
  height: 100vh;
  overflow: hidden;
  text-align: center;
  position: relative;
  color: #fff !important;

  padding-top: 8rem;

  > .cta {
    width: 331px !important;
    height: 61px !important;
    margin: 2rem auto !important;

    background-color: #fff !important;
    color: #0290fe !important;
    font-size: 18px !important;
    font-weight: 700;
  }

  > h1 {
    font-size: 10rem;
  }
  > .title-2 {
    text-transform: uppercase;
  }

  > img {
    width: 100%;
    height: 100%;
    transform: scale(2.2);
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }

  > p {
    width: 40%;
    margin: 1rem auto;
  }
}
</style>