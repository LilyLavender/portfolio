<template>
  <div class="home">
    <!-- Title / desc -->
    <h1 class="slide-in">Lilian Schally</h1>
    <hr />
    <h3 class="slide-in delay-1">Web and Software Development Student</h3>
    <p class="slide-in delay-2 connect-top">...but you already knew that.</p>
    <p class="slide-in delay-3 connect-bottom">Learn more about me in my portfolio!</p>

    <div class="spacer"></div>

    <!-- Nav buttons -->
    <div class="router-buttons unvisitable">
      <router-link to="/development" class="button gooey">
        View my Portfolio!
        <br>
        <i class="far fa-images large-i"></i>
      </router-link>
      <router-link to="/resume" class="button gooey">
        ..or the Resume!
        <br>
        <i class="fas fa-file large-i"></i>
      </router-link>
    </div>

    <div class="spacer"></div>

    <!-- Social links -->
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
  align-items: center;
}
.router-buttons .button {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.router-buttons i {
  margin-right: 5px;
}
a {
  width: fit-content;
  height: fit-content;
}
h1 {
  margin-bottom: 1rem;
}
.large-i {
  font-size: xx-large;
  margin-top: 0.75rem;
}
.connect-top {
  margin-bottom: 0;
}
.connect-bottom {
  margin-top: 0;
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

/* Spacer */
.spacer {
  height: 2rem;
}
</style>
