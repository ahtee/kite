<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/logo.png" width="135" />

    <h1>Kite</h1>

    <p>
      Kite is an enterprise storage platform for storing static files in
      <strong>AWS S3</strong>,
      <strong>Azure Files</strong>, and Google Cloud Platform's
      <strong>Filestore</strong>
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Kite"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
