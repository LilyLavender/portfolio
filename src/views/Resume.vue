<template>
  <div class="resume-page container py-5">
    <div class="resume-header">
      <h1>Lilian Schally</h1>
      <a href="./src/assets/resume/Resume - Lilian Schally.pdf" download class="button gooey unvisitable">
        <i class="fas fa-file-arrow-down"></i>
        Download
      </a>
    </div>

    <section>
      <h2 class="job-title">Web and Software Development</h2>
      <p class="summary">
        Passionate and adaptable software developer with experience in web and software development. Skilled in Vue, React, Python, Rust, Java, and C#, with hands-on experience in many environments. Strong problem-solving abilities, effective attention to detail, outstanding teamwork, and a quick learner, demonstrated through freelance projects and collaborative work. Experienced in API integration, front-end and back-end development, and delivering high-quality products.
      </p>
    </section>

    <hr />

    <section>
      <h2>Education</h2>
      <p><strong>Web and Software Development</strong> (Associate of Applied Science)</p>
      <p>Waukesha County Technical College — Pewaukee, WI</p>
      <ul>
        <li>Expected Graduation: May 2026</li>
        <li><b>Notable classes:</b></li>
        <ul class="classes-list">
          <li>JavaScript 2</li>
          <li>.NET Database Programming</li>
          <li>.NET Web Development</li>
          <li>Advanced Web Services Development</li>
          <li>Software Architecture</li>
          <li>Web Server Administration</li>
          <li>Mobile App Development</li>
          <li>System Analysis Agile Methods</li>
          <li>Calculus BC</li>
          <li>IS Project</li>
        </ul>
      </ul>
    </section>

    <section>
      <h2>Skills & Competencies</h2>
      <ul>
        <li>Programming Languages: JavaScript, Python, Rust, Java, & C#</li>
        <li>Work with Web Development frameworks (Vue, React) and APIs.</li>
        <li>Adaptability: Quick learner and able to adapt to new technologies and challenges.</li>
        <li>Teamwork: Effective team member, demonstrated through collaboration at Pick 'n Save and with freelance projects.</li>
        <li>Problem Solving: Strong analytical skills developed through coursework, programming projects, and freelance work.</li>
        <li>Photography: Proficient in photography techniques and post-processing.</li>
      </ul>
    </section>

    <section class="work-experience">
      <h2>Work Experience</h2>
      <p><strong>Freelance Programmer</strong> — 2022 – Present</p>
      <ul>
        <li>Undertook various freelance programming projects alone and in teams, showcasing proficiency in HTML, CSS, Java, C#, and Rust.</li>
        <li>Collaborated with clients to develop and maintain code, ensuring quality and timeliness.</li>
      </ul>

      <p><strong>Cashier/Pickup - Pick 'n Save, New Berlin, WI</strong> — 2021 – Present</p>
      <ul>
        <li>Efficiently handled cash transactions, provided excellent customer service, and maintained a tidy work environment.</li>
        <li>Collaborated with a diverse team to ensure the smooth operation of the store.</li>
        <li>Developed strong communication skills through interactions with customers.</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.resume-page {
  text-align: left;
  max-width: 900px;
}
.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -1.5rem;
  margin-top: 1.5rem;
}
h2 {
  text-align: left;
  margin-bottom: -0.5rem;
  width: fit-content;
}
h2.job-title {
  text-align: center;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
}
.summary {
  text-align: center;
  width: 80%;
  margin: 0 auto 2rem auto;
}
strong {
  font-size: large;
}
.work-experience {
  width: 75%;
}
/* Classes list */
.classes-list {
  text-align: center;
}
.classes-list li {
  display: inline;
}
.classes-list li:not(:last-of-type) {
  margin-right: 0.5rem;
}
.classes-list li:not(:last-of-type):after {
  content: '|';
  margin-left: 0.5rem;
}
</style>
