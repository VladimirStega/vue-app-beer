<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; Test work for "Банда умников" {{ date | date("date") }}</p>
    </div>
  </footer>
</template>
<script>
export default {
  data: () => ({
    date: new Date(),
  }),
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
};
</script>
<style>
</style>