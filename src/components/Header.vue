<script>
export default {
  name: "Header",
  data() {
    return {
      menuItems: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Nuovo Post",
          routeName: "createPost",
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <nav
      class="navbar navbar-expand-lg custom-header d-flex align-items-center padding-0"
    >
      <div class="container">
        <!-- Logo -->

        <div>
          <router-link class="navbar-brand d-flex" :to="{ name: 'home' }">
            <img src="../../logo.png" class="logo" alt="" />
          </router-link>
        </div>

        <!-- Menu -->

        <div class="dropdown">
          <div class="d-none d-lg-block">
            <ul class="navbar-nav">
              <li v-for="(item, index) in menuItems" :key="index">
                <router-link :to="{ name: item.routeName }" class="nav-link">
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Dropdown -->

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa-solid fa-bars white"></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton"
          >
            <ul class="list-unstyled mb-0 d-flex flex-column align-items-end container">
              <li v-for="(item, index) in menuItems" :key="index">
                <router-link :to="{ name: item.routeName }" class="nav-link">
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 3;
}

.custom-header {
  background-color: rgb(34, 9, 44);
  height: 10vh;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  margin-top: 50px;
  background-color: rgb(135, 35, 65);
}

.navbar .nav-link {
  color: white;

  &:hover {
    color: rgb(240, 89, 65);
  }
}

.logo {
  height: 8vh;
  width: auto;
}
</style>
