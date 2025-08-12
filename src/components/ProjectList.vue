<template>
  <div class="portfolio container py-5">
    <div class="project-grid">
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        class="row-wrapper"
      >
        <div
          v-if="getPositionClass(index) === 'align-right'"
          class="gooey green-circle left"
        ></div>

        <ProjectCard
          :project="project"
          :class="getPositionClass(index)"
        />

        <div
          v-if="getPositionClass(index) === 'align-left'"
          class="gooey green-circle right"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'

const projects = [
  {
    title: 'Ultimate Moveset Compatibility',
    description: 'UMC is my first large web development project made entirely from scratch. It serves as a way for modders to post information on their movesets and to allow other creators to ensure compatibility between them.',
    tags: [ 'Vue', 'Vuetify', 'C#', 'JavaScript', 'SQL', 'ASP.NET', 'Entity Framework', 'Azure' ],
    images: [ 'umc-1.png', 'umc-2.png', 'umc-3.png', 'umc-4.png', 'umc-5.png', 'umc-6.png', 'umc-7.png', 'umc-8.png'  ],
    downloadLink: 'https://lilylavender.github.io/UltimateMovesetCompatibility/',
    downloadText: 'View the Alpha',
    downloadIcon: 'far fa-eye',
    sourceLink: 'https://github.com/LilyLavender/UltimateMovesetCompatibility',
    sourceText: 'Source Code',
    sourceIcon: 'fab fa-github'
  },
  {
    title: 'Vehicle Vault',
    description: 'Vehicle Vault was my group capstone project, and is used internally at Waukesha County Technical College for tracking information on the college\'s vehicle inventory. Throughout the 16 weeks our group worked on the project, we were keeping in close contact with our product owners and using Scrum\'s framework. I served as the group\'s Scrum Master for the duration of the class.',
    tags: [ 'Vue', 'C#', 'Vuetify', 'ASP.NET', 'Entity Framework', 'SQL', 'JavaScript', 'SCSS' ],
    images: [ 'https://youtu.be/ZhOqReURmCI?start=3337' ],
    downloadText: 'For internal use at WCTC only',
    downloadIcon: 'fas fa-lock'
  },
  {
    title: 'DiscFinder',
    description: 'DiscFinder is the final project for my JavaScript 2 class. It was my first time using Vue, Firebase, and SCSS, which was a very fun experience overall. DiscFinder includes a way for users to sign up with Google, browse Discogs\' API, and view statistics about their physical music collections.',
    tags: [ 'Vue', 'Firebase', 'SCSS', 'Bootstrap' ],
    images: [ 'df-1.png', 'df-2.png', 'df-3.png', 'df-4.png', 'df-5.png', 'df-6.png', 'df-7.png', 'df-8.png', 'df-9.png', 'df-10.png', 'df-11.png', 'df-12.png', 'df-13.png' ]
  },
  {
    title: 'Starchild',
    description: 'Starchild is an executable made to allow editing of Peglin\'s boards. The project is currently a work in progress, but almost everything had to be done from scratch- most notably serializing/deserializing a proprietary format.',
    tags: [ 'C#', 'Winforms', 'Serializer' ],
    images: [ 'sc-1.png', 'sc-2.png', 'sc-3.png', 'sc-4.png', 'sc-5.png' ],
    sourceLink: 'https://github.com/LilyLavender/Starchild',
    sourceText: 'Source code',
    sourceIcon: 'fab fa-github'
  },
  {
    title: 'reclyne',
    description: 'reclyne is a lightweight calendar built to showcase the utility of a line-by-line layout. I made reclyne before I learned how to use anything more complicated than jQuery, so the app is made entirely custom with HTML, CSS, jQuery, and a dream. I\'m currently in the process of updating it for Vue.',
    tags: [ 'JavaScript', 'jQuery', 'HTML', 'CSS' ],
    images: [ 'r-1.png', 'r-2.png', 'r-3.png', 'r-4.png', 'r-5.png', 'r-6.png', 'r-7.png', 'r-8.png', 'r-9.png', 'r-10.png' ],
    downloadLink: 'https://lilylavender.github.io/reclyne/',
    downloadText: 'View Site',
    downloadIcon: 'far fa-eye',
    sourceLink: 'https://github.com/LilyLavender/reclyne',
    sourceText: 'Source code',
    sourceIcon: 'fab fa-github'
  },
  {
    title: 'Mario & Luigi Combo Effects',
    description: 'A plugin for Smash Ultimate that detects when a fighter has landed a combo and will play the visual and sound effects that the player specifies in a toml file.',
    tags: [ 'Rust', 'toml', 'Plugin' ],
    images: [ 'ce-1.jpg', 'ce-2.jpg', 'ce-3.jpg', 'ce-4.jpg', 'ce-5.jpg' ],
    downloadLink: 'https://gamebanana.com/mods/542290',
    downloadText: 'Download',
    downloadIcon: 'fas fa-arrow-up-right-from-square',
    sourceLink: 'https://github.com/LilyLavender/MLComboFX',
    sourceText: 'Source code',
    sourceIcon: 'fab fa-github'
  },
  {
    title: 'combo_fx.toml Generator',
    description: 'Helper website for the Mario & Luigi Combo Effects mod that generates a combo_fx.toml file for the given parameters.',
    tags: [ 'React', 'Tailwind', 'toml' ],
    images: [ 'ceg-1.png', 'ceg-2.png' ],
    downloadLink: 'https://lilylavender.github.io/combo_fx.toml-Generator/',
    downloadText: 'View Site',
    downloadIcon: 'far fa-eye',
    sourceLink: 'https://github.com/LilyLavender/combo_fx.toml-Generator',
    sourceText: 'Source code',
    sourceIcon: 'fab fa-github'
  },
  {
    title: 'Sports Logo Quiz',
    description: 'This site was originally a self-imposed challenge to make a fun game in 2 hours. It\'s fairly bare bones, but includes a scoring system with streaks and bonuses that got my friends playing for hours despite not caring for sports.',
    tags: [ 'JavaScript', 'jQuery', 'HTML', 'CSS' ],
    images: [ 'slq-1.png', 'slq-2.png', 'slq-3.png', 'slq-4.png', 'slq-5.png', 'slq-6.png', 'slq-7.png' ],
    downloadLink: 'https://lilylavender.github.io/SportsLogoQuiz/',
    downloadText: 'View Site',
    downloadIcon: 'far fa-eye',
    sourceLink: 'https://github.com/LilyLavender/SportsLogoQuiz',
    sourceText: 'Source Code',
    sourceIcon: 'fab fa-github'
  },
  {
    title: 'Olympic Rings',
    description: 'The Olympic Rings app was my final for Advanced Web Services. The site showcases knowledge of user authentication and roles, and building accessible applications with React.',
    tags: [ 'React', 'C#', 'ASP.NET', 'Entity Framework', 'SQL', 'Azure' ],
    images: [ 'or-1.png', 'or-2.png', 'or-3.png' ],
    downloadLink: 'https://lilylavender.github.io/AWS-Module1/',
    downloadText: 'View Site',
    downloadIcon: 'far fa-eye',
    sourceLink: 'https://github.com/LilyLavender/AWS-Module1',
    sourceText: 'Source Code',
    sourceIcon: 'fab fa-github'
  },
  {
    title: 'Auto-Translate',
    description: 'In October of 2024, I met Ian. We didn\'t have a lot in common, but we both recognized that Ghidra\'s decompilation of proprietary formats left outputs mangled, and more work always needed to be done to make code readable. We decided to put our heads together and create auto-translate, a Python script to clean and condense decompiled scripts from Ghidra. Despite both of us not being too familiar with Python at the time, frequent collaboration quickly paved the way for auto-translate to go from a concept to an impressive tool for fixing mangled code.',
    tags: [ 'Python', 'Decompilation', 'Formatting', 'Ghidra', 'Rust' ],
    images: [ 'at-1.png', 'at-2.png', 'at-3.png' ],
    downloadLink: 'https://github.com/ianmhuff/auto-translate',
    downloadText: 'GitHub',
    downloadIcon: 'fab fa-github'
  },
  {
    title: 'Dynamic Shulk Effects',
    description: 'Dynamic Shulk Effects is a mod for Smash Ultimate that hooks one of the game\'s internal functions to override vanilla behavior. The final product is a system where the trails of Shulk\'s sword are different colors depending on the art he has active.',
    tags: [ 'Rust', 'Function Hooking', 'Plugin' ],
    images: [ 'dse-1.jpg', 'dse-2.jpg', 'dse-3.jpg', 'dse-4.jpg', 'dse-5.jpg', 'dse-6.png' ],
    downloadLink: 'https://gamebanana.com/mods/477009',
    downloadText: 'Download',
    downloadIcon: 'fas fa-arrow-up-right-from-square',
    sourceLink: 'https://github.com/LilyLavender/dynamicShulkEffects',
    sourceText: 'Source Code',
    sourceIcon: 'fab fa-github'
  },
  {
    title: 'Install Generator',
    description: 'When coding Smash Ultimate mods in Rust, it can be hard to remember how to install every type of function there is. The Install Generator is both a VSCode extension and a Notepad++ script that, when given a Rust file, will generate an install section for every script found in the file.',
    tags: [ 'Python', 'TypeScript', 'VSCode Extension', 'Notepad++ Script', 'Rust' ],
    images: [ 'ig-1.png', 'ig-2.png' ],
    downloadLink: 'https://github.com/LilyLavender/InstallGenerator',
    downloadText: 'GitHub',
    downloadIcon: 'fab fa-github'
  },
  {
    title: 'HTML, CSS, & JavaScript Tutorial',
    description: 'A pretty well known fact about me is that I love teaching and helping others. I\'ve helped people from best friends to complete strangers with various programming projects, so I was elated to hear my final for Technical Reporting was to make a tutorial. This aims to teach HTML, CSS, and jQuery in 20 minutes.',
    tags: [ 'Tutorial', 'HTML', 'CSS', 'JavaScript', 'jQuery' ],
    images: [ 'https://www.youtube.com/watch?v=5bc8yOEk8i0' ]
  },
  {
    title: 'lamyist',
    description: 'I always thought the program \"yamlist\" was unnecessarily complicated to use. lamyist is therefore a .bat file that preserves the functionality of yamlist while making it no more than a drag-and-drop operation.',
    tags: [ 'Batchfile' ],
    images: [ 'ly-1.png' ],
    downloadLink: 'https://github.com/LilyLavender/lamyist',
    downloadText: 'GitHub',
    downloadIcon: 'fab fa-github'
  }
]

function getPositionClass(index) {
  const pattern = ['right', 'center-left', 'left', 'center-right']
  return `align-${pattern[index % pattern.length]}`
}
</script>

<style scoped>
.project-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.row-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Decorative green circles */
.green-circle {
  position: absolute;
  width: 900px;
  height: 900px;
  border-radius: 50%;
  pointer-events: none;
}
.green-circle:not(.cloned-gooey) {
  background-color: transparent;
}
.green-circle.left {
  left: 0;
  transform: translateX(-40%);
}
.green-circle.right {
  right: 0;
  transform: translateX(40%);
}
.green-circle.cloned-gooey {
  background-color: #1a6c07;
}
</style>
