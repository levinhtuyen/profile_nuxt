<template>
  <b-row style="margin-left: 0; margin-right: 0">
    <b-col md="4">
      <b-img
        :src="avatar"
        id="Tuyến Memoji"
        @mouseenter="changeAvatar"
        @mouseleave="changeAvatar"
      />
    </b-col>

    <b-col md="8">
      <h2 class="intro animate__animated animate__fadeInUp animate__fast">
        Hi 👋,
        <br />I<span>'m Lê Vĩnh Tuyến</span>.
      </h2>

      <div class="col-md-10 info">
        A <b>front-end developer</b> and <b>technical writer</b> passionate
        about solving problems with tech.<br />
        I am skilled with building exceptional <b>websites</b>
        <b>Vuejs, Vite, NuxtJs</b>
        <br />
        I am skilled with CSS frameworks:
        <b>Bootstrap, Quasar, ElementUI, TailwindCSS ... </b>
        <b-button
          class="action-btn animate__animated animate__wobble animate__delay-4s animate__fast"
          to="/projects"
        >
          Explore >
        </b-button>

        <b-button class="action-btn" to="/contact" variant="primary">
          Get In Touch
        </b-button>

        <!-- .SOCIAL LINKS SECTION -->
        <div
          class="social-icons animate__animated animate__fadeInUp animate__delay-1s"
        >
          <social-link :to="socialLinks.github">
            <GithubIcon />
          </social-link>

          <!-- <social-link :to="socialLinks.linkedin">
            <LinkedinIcon />
          </social-link> -->

          <!-- <social-link :to="socialLinks.twitter">
            <TwitterIcon />
          </social-link> -->

          <social-link :to="socialLinks.facebook">
            <FacebookIcon />
          </social-link>

          <social-link :to="socialLinks.mail">
            <MailIcon />
          </social-link>

          <!-- <social-link :to="socialLinks.youtube">
            <YoutubeIcon />
          </social-link> -->
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
// import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
// import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
import FacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
import YoutubeIcon from "vue-ionicons/dist/logo-youtube.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";

export default {
  components: {
    GithubIcon,
    // LinkedinIcon,
    // TwitterIcon,
    FacebookIcon,
    YoutubeIcon,
    MailIcon,
  },

  data() {
    return {
      avatar: require("@/static/avatar-1.webp"),
      // ADD YOUR SOCIAL LINKS HERE 👇
      socialLinks: {
        github: "https://levinhtuyen.github.io/profile_nuxt/",
        // linkedin: "https://www.linkedin.com/in/asaoluelijah/",
        // twitter: "https://twitter.com/asaolu_elijah",
        facebook: "https://www.facebook.com/profile.php?id=100007906847424",
        mail: "levinhtuyen210@gmail.com",
        youtube: "",
      },
    };
  },

  head: {
    title: "Portfolio ⚡ - Tuyến",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Tuyến is an awesome front-end developer and technical writer, passionate about building solutions that works across multiple platforms with high accessibility approach. Elijah has vast knowledge in web development with over 3+ years experience in building actual products",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Portfolio ⚡ - Tuyến",
      },
      {
        property: "og:description",
        content:
          "Tuyến is an awesome front-end developer and technical writer, passionate about building solutions that works across multiple platforms with high accessibility approach. Elijah has vast knowledge in web development with over 3+ years experience in building actual products",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/static/coding.png"),
      },
    ],
  },
  methods: {
    changeAvatar() {
      if (this.avatar == require("@/static/avatar-2.webp")) {
        this.avatar = require("@/static/avatar-1.webp");
      } else {
        this.avatar = require("@/static/avatar-2.webp");
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
