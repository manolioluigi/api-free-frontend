<script>
import axios from "axios";

export default {
  name: "postDetail",
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      const slug = this.$route.params.slug;
      try {
        const response = await axios.get(`http://localhost:3300/posts/${slug}`);
        this.post = response.data.data;
      } catch (error) {
        console.error("Errore durante il recupero del post:", error);
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
  <div class="post-detail">
    <div class="container py-4">
      <h2 class="my-4 white">Dettagli del Post</h2>
      <div v-if="post" class="white">
        <img :src="post.image" alt="" />
        <h3 class="my-2">Titolo: {{ post.title }}</h3>
        <p>Descrizione: {{ post.content }}</p>
        <div class="author">
          <span>Creato il: </span>{{ this.formatDate(post.createdAt) }}
        </div>
      </div>
      <div v-else>
        <p>Caricamento...</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-detail {
  background-color: rgb(190, 49, 68);
  min-height: 90vh;
}
</style>
