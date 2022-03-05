<template>
  <div class="about page  animate__animated animate__fadeIn">
    <h2>Recent Project</h2>
    <div class="container">
      <div class="row" v-for="(project, index) in projects" :key="index">
        <div class="col-md-5">
          <img
            :src="project.image_cover"
            :alt="project.title"
            class="project-cover"
          />
        </div>
        <div class="col-md-5">
          <h2 class="mt-3" style="text-align: left;">
            {{ project.title }}
            <hr class="dope" />
          </h2>
          <b-card class="mt-3 mb-3 text-left text-dark">
            <p>{{ project.description }}</p>
            <b-link :href="project.link"
              >Check it out! <LinkIcon style="color: #000;"
            /></b-link>
            <hr />
            <b-link :href="project.github_url"
              >View source code <GithubIcon style="color: #000;"
            /></b-link>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LinkIcon from "vue-ionicons/dist/md-link.vue";
import GithubIcon from "vue-ionicons/dist/logo-github.vue";

export default {
  components: {
    GithubIcon,
    LinkIcon
  },
  data() {
    return {
      projects: [
        {
          title: "Anbooks",
          tag: "Progressive Web App",
          description:
            "Website published books.",
          image_cover: require("@/assets/speak.jpg"),
          github_url: "",
          link: "http://www.anbooks.vn/"
        },
        {
          title: "Go2joy",
          tag: "Progressive Web App",
          description:
            "Top of hourly hotel booking app in Vietnam with exclusive benefits.",
          image_cover: require("@/assets/illustration.jpg"),
          github_url: "",
          link: ""
        },
        {
          title: "SA Go2joy",
          tag: "Web Admin",
          description:
            "Tracking and manager booking, user ... for Go2joy",
          image_cover: require("@/assets/qr-1.png"),
          github_url: "",
          link: ""
        },
        {
          title: "HA Go2joy",
          tag: "Web Admin",
          description:
            "Tracking and manager booking, user ... for Hotel",
          image_cover: require("@/assets/qr-1.png"),
          github_url: "",
          link: ""
        }
      ],
    };
  },
  methods: {
    isEven(n) {
      if (n % 2 == 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  head: {
    title: "Recent Projects 💻 - Tuyến",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "View all the recents open-sourced projects built with ♥ by Tuyến, open-sourced means this project source code are publicly available for everyone to use or modify."
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Recent Projects 💻 - Tuyến"
      },
      {
        property: "og:description",
        content:
          "View all the recents open-sourced projects built with ♥ by Asaolu Elijah, open-sourced means this project source code are publicly available for everyone to use or modify."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/assets/man-computer.png")
      }
    ]
  }
};
</script>
<style scoped>
.row {
  margin-top: 70px;
}
.project-cover {
  width: inherit;
  border-radius: 3px;
}
hr.dope {
  border: 0;
  width: 90px;
  border-top: 2px solid #dc3545;
  text-align: left;
  margin: initial;
  margin-top: 7px;
  margin-left: 5px;
}
</style>
