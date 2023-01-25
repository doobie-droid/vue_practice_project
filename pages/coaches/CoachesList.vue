<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul>List of Coaches</ul>
  </section>

</template>

<script>

export default {
    computed: {
        filteredCoaches() {
        return this.$store.getters['coachModule/coaches']
    }
 }
}
</script>