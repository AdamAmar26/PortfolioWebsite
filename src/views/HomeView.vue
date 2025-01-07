<template>
  <v-container class="home-page" fluid>
    <v-row justify="center" class="my-10">
      <!-- Profile Picture -->
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="400">
          <img src="@/assets/Pic Composite.png" alt="Profile Picture" />
        </v-avatar>
      </v-col>

      <!-- Introduction Text -->
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h3 font-weight-bold">Welcome to <span class="primary--text">Adam Amar's Portfolio</span></h1>
        <p class="text-subtitle-1 my-4">
          Hi there! I'm an aspiring Cybersecurity Analyst and Software Developer with a passion for solving complex
          technical challenges and designing innovative, secure solutions.
        </p>
        <p class="text-body-1">
          I specialize in web development, cybersecurity, and IT support, with hands-on experience in secure network
          configurations and custom software development. My mission is to leverage my technical expertise to create
          impactful and reliable solutions. Explore my portfolio to learn more about my skills, projects, and experiences.
        </p>
        <v-btn to="/about" color="primary" large class="my-5">
          Learn More About Me
        </v-btn>
        <v-btn to="/projects" color="primary" large class="my-5">
          Discover my projects
        </v-btn>
        <v-btn to="/jobs" color="primary" large class="my-5">
          Follow my professional experience
        </v-btn>
        <p class="text-body-1">
          I have developed this website using Vue for the infrastructure,
          Vuetify for the UI components, Firebase Datastore for collection management coupled with Pinia for state management. I also have deployed the website on a server locally using Ubuntu as the OS and Apache as the web server. Last update was made on: January 7th 2025
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  background-color: #f8f9fa;
}
.primary--text {
  color: #1e88e5;
}
.my-5{
  padding: 10px;
  margin: 10px;
}
</style>
