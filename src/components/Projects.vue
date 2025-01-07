<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-card-actions>
      <v-btn text :href="github">GitHub</v-btn>
      <v-btn text @click="viewDetails">View Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    title: String,
    description: String,
    github: String,
  },
  methods: {
    viewDetails() {
      this.$emit('project-selected', this.title); // Emit event with project title
    },
  },
};
</script>
