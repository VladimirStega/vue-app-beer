<template>
  <section class="profile">
    <div class="container">
      <h2 class="profile__title">Profile User Info</h2>
      <div class="profile__content">
        <ul class="profile__list">
          <li class="profile__item">
            <span class="profile__title">First name:</span>
            <span class="profile__descr">{{ PROFILE_INFO.first_name }}</span>
          </li>
          <li class="profile__item">
            <span class="profile__title">Last name:</span>
            <span class="profile__descr">{{ PROFILE_INFO.last_name }}</span>
          </li>
          <li class="profile__item">
            <span class="profile__title">User name:</span>
            <span class="profile__descr">{{ PROFILE_INFO.username }}</span>
          </li>
          <li class="profile__item">
            <span class="profile__title">Email:</span>
            <span class="profile__descr">{{ PROFILE_INFO.email }}</span>
          </li>
          <li class="profile__item">
            <span class="profile__title">Gender</span>
            <span class="profile__descr">{{ PROFILE_INFO.gender }}</span>
          </li>
          <li class="profile__item">
            <span class="profile__title">Phone number:</span>
            <span class="profile__descr">{{ PROFILE_INFO.phone_number }}</span>
          </li>
        </ul>
        <div class="profile-likeBeer">
          <p class="profile__beerText">Your choice of beer today...</p>
          <p class="profile__beerToDay">
            {{ BEER_INFO.brand }}, {{ BEER_INFO.name }}, {{ BEER_INFO.hop }},
            {{ BEER_INFO.blg }}, {{ BEER_INFO.alcohol }},
            {{ BEER_INFO.malts }},{{ BEER_INFO.style }}, {{ BEER_INFO.yeast }}
          </p>
          <img src="../assets/image/beer.png" alt="" />
          <button @click.prevent="GET_BEER_INFO" class="profile__btn">
            DON'T AGREE WITH THE CHOICE?
            <img
              class="profile__btnImage"
              src="../assets/image/refresh.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "profile-main",
  props: {},
  data() {
    return {
      profileInfo: [],
      beerInfo: [],
    };
  },

  methods: {
    ...mapActions(["GET_PROFILE_INFO"]),
    ...mapActions(["GET_BEER_INFO"]),
    loadBeer() {},
  },
  mounted() {
    this.GET_PROFILE_INFO();
    this.GET_BEER_INFO();
  },
  computed: {
    ...mapGetters(["PROFILE_INFO"]),
    ...mapGetters(["BEER_INFO"]),
  },
  created() {},
};
</script>

<style lang="sass">
</style>