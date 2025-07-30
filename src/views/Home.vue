<template>
  <div class="home">
    <h1>Lilian Schally</h1>
    <p>Web and Software Development Student</p>
    <div class="router-buttons unvisitable">
      <router-link to="/resume" class="button gooey">
        <i class="fas fa-file"></i>
        Resume
      </router-link>
      <router-link to="/development" class="button gooey">
        <i class="fas fa-images"></i>
        Portfolio
      </router-link>
    </div>
    <div class="social unvisitable">
      <a href="https://github.com/LilyLavender" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/lilian-schally/" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:lilylambda136@gmail.com">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  margin-top: 4rem;
}
.router-buttons {
  display: flex;
  gap: 1rem; 
}
.router-buttons .button {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.router-buttons i {
  margin-right: 5px;
}

/* Social */
.social {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}
i {
  font-size: 1.2rem;
}
a {
  margin: 0.5rem;
}
</style>
