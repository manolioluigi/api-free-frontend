<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("http://localhost:3300/posts");
        this.posts = response.data.data;
      } catch (error) {
        console.error("Errore durante il recupero dei post:", error);
      }
    },
    formatDate(datetime) {
      const date = new Date(datetime);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>

<template>
  <div class="home">
    <!-- Elenco dei post -->
    <div class="container py-4">
      <div class="row">
        <div class="col">
          <h2 class="my-3 white">Elenco dei post</h2>
          <ul class="d-flex flex-wrap list-unstyled justify-content-between">
            <li v-for="post in posts" :key="post.id">
              <div class="card my-3">
                <div class="card-image"><img :src="post.image" alt="" /></div>
                <div class="category">{{ post.title }}</div>
                <div class="heading">
                  <div class="content">
                    {{ post.content }}
                  </div>
                  <div class="author">
                    <span>Creato il: </span>{{ this.formatDate(post.createdAt) }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background-color: rgb(190, 49, 68);
  min-height: 90vh;
}

.card {
  width: 190px;
  background: rgb(135, 35, 65);
  padding: 0.4em;
  border-radius: 6px;
}

.card-image {
  background-color: rgb(135, 35, 65);
  width: 100%;
  height: 130px;
  border-radius: 6px 6px 0 0;
  img {
    width: 100%;
  }
}

.card-image:hover {
  transform: scale(0.98);
}

.category {
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 600;
  color: rgb(240, 89, 65);
  padding: 10px 7px 0;
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 600;
  color: white;
  padding: 7px;
}

.content {
  height: 70px;
  overflow: auto;
}

.card:hover {
  cursor: pointer;
}

.author {
  color: rgb(240, 89, 65);
  font-weight: 400;
  font-size: 11px;
  padding-top: 20px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}
</style>
