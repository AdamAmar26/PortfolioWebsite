<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- Search Bar -->
        <v-text-field
          v-model="searchQuery"
          label="Search Projects"
          outlined
          class="search bar"
          hide-details="auto"
        ></v-text-field>

        <!-- Project Cards -->
        <div v-for="project in filteredProjects" :key="project.title" class="mb-6">
          <Projects
            :title="project.title"
            :description="project.description"
            :github="project.github"
            :demo="project.demo"
            @project-selected="handleProjectSelected"
          />
        </div>
      </v-col>
    </v-row>

    <!-- Project Details Dialog -->
    <v-dialog v-model="dialogVisible" max-width="600">
      <v-card>
        <v-card-title class="text-h5">{{ selectedProject?.title }}</v-card-title>
        <v-card-text>
          <p>{{ selectedProject?.description }}</p>
          <p><strong>GitHub:</strong> <a :href="selectedProject?.github" target="_new">{{ selectedProject?.github }}</a></p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialogVisible = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { useProjectsStore } from '@/stores/projects';
import { mapState, mapActions } from 'pinia';
import Projects from '@/components/Projects.vue';

export default {
  components: {
    Projects,
  },
  data() {
    return {
      selectedProject: null, // Tracks the project selected for viewing details
      dialogVisible: false, // Controls the visibility of the dialog
      searchQuery: '', // User input for filtering
      filteredProjects: [], // Filtered list of projects
    };
  },
  methods: {
    ...mapActions(useProjectsStore, ['getAllProjectsFromDB']),
    handleProjectSelected(title) {
      const project = this.getAllProjects.find((p) => p.title === title);
      if (project) {
        this.selectedProject = project; // Set selected project
        this.dialogVisible = true; // Open dialog
      }
    },
  },
  computed: {
    ...mapState(useProjectsStore, ['getAllProjects', 'getQueryList']),
  },
  watch: {
    getAllProjects: {
      handler(newProjects) {
        this.filteredProjects = newProjects; 
      },
      immediate: true, 
    },
    searchQuery(newQuery) {
      this.filteredProjects = this.getAllProjects.filter((project) =>
        project.title.toLowerCase().includes(newQuery.toLowerCase())
      );
    },
  },
  created() {
    this.getAllProjectsFromDB();
  },
};
</script>

<style scoped>
.mb-6 {
  margin-bottom: 24px; 
}

.v-text-field {
  background-color: #f9f9f9; 
  border-radius: 8px; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
</style>
