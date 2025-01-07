<template>
    <v-app>
      <!-- Header -->
      <v-parallax
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
      <v-app-bar app color="primary" dark elevate-on-scroll>
        <v-toolbar-title class="font-weight-bold">Adam Amar</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/" class="nav-link">Home</v-btn>
        <v-btn text to="/about" class="nav-link">About Me</v-btn>
        <v-btn text to="/projects" class="nav-link">Projects</v-btn>
        <v-btn text to="/jobs" class="nav-link">Experience</v-btn>
        <v-btn text to="/contact" class="nav-link">Contact</v-btn>
      </v-app-bar>
  
      <!-- Main Content -->
      <v-main>
        <router-view/>
      </v-main>
  
      <!-- Footer -->
      <v-footer app class="footer">
        <v-container class="text-center">
          <p>&copy; 2024 Adam Amar</p>
          <v-btn icon href="https://github.com/AdamAmar26?tab=repositories" target="_new">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon href="https://linkedin.com/in/amaradam" target="_new">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </v-container>
      </v-footer>
    </v-parallax>
    </v-app>
</template>
  
<script>
  export default {
    name: "Layout",
  };
</script>
  
<style scoped>
  /* Header Styles */
  .nav-link {
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0 10px;
    transition: color 0.3s;
  }
  
  .nav-link:hover {
    color: #bbdefb; 
  }
  
  /* Footer Styles */
  .footer {
    background-color: #68abe5; 
    color: white;
    text-align: center;
    height: 90px;
  }
</style>