<script>
import axios from "axios";

export default {
  name: "createPost",
  data() {
    return {
      postData: {
        title: "",
        image: "",
        content: "",
        published: true,
      },
    };
  },
  methods: {
    async createPost() {
      try {
        await axios.post("http://localhost:3300/posts", this.postData);
        this.$router.push("/");
      } catch (error) {
        console.error("Errore durante la creazione del post:", error);
      }
    },
  },
};
</script>

<template>
  <div class="create-post">
    <div class="container py-5">
      <h2 class="my-3 white">Crea un nuovo post</h2>
      <form @submit.prevent="createPost">
        <div class="mb-3">
          <label for="title" class="form-label white">Titolo</label>
          <input
            v-model="postData.title"
            type="text"
            class="form-control"
            id="title"
            required
          />
        </div>
        <div class="mb-3">
          <label for="image" class="form-label white">URL dell'immagine</label>
          <input
            v-model="postData.image"
            type="url"
            class="form-control"
            id="image"
            placeholder="https://picsum.photos/300/200"
            required
          />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label white">Contenuto</label>
          <textarea
            v-model="postData.content"
            class="form-control"
            id="content"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn submit">Crea Post</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.create-post {
  background-color: rgb(190, 49, 68);
  min-height: 90vh;
}

.submit {
  background-color: rgb(135, 35, 65);
  color: white;
  &:hover {
    background-color: rgb(34, 9, 44);
    color: white;
  }
}
</style>
