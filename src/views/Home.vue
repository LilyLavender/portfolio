<template>
  <div class="home">
    <h1>Lilian Schally</h1>
    <p>Web and Software Developer</p>
    <router-link to="/resume" class="button gooey">Resume</router-link>
    <router-link to="/development" class="button gooey">Portfolio</router-link>
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
.button {
  display: inline-block;
  margin: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: #1a6c07;
  color: white;
  border-radius: 5px;
  text-decoration: none;
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
