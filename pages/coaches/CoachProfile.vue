<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area">
      </base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
  <!-- <h1>Coach Profile</h1>
  <router-view></router-view>
  <router-link to="/coaches/3/contact">Contact</router-link> -->
</template>

<script>
export default {
  props: ['id'],
  computed: {
    contactLink() {
      return this.$route.path + `/contact`;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
  },
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    this.selectedCoach = this.$store.getters['coachModule/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>