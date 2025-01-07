<template>
    <v-card>
        <v-card-title>{{ company }}</v-card-title>
        <v-card-subtitle>{{ title }}</v-card-subtitle>
        <v-card-text>{{ startDate }} to {{ endDate }}</v-card-text>
        <v-card-text>
          <ol type="I" class="details-list">
            <li v-for="det in details" :key="det" class="details-item">
                {{ det }}
            </li>
          </ol>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: 'Jobs',
  props: {
    title: String,
    company: String,
    startDate: String,
    endDate: String,
    details: Array
  },
}
</script>

<style scoped>
.details-list {
    margin: 0; /* Ensure no extra margin for the list */
    padding: 0; /* Remove default list padding */
    list-style-position: inside; /* Keep list numbers aligned with text */
}

.details-item {
    margin-top: 10px; /* Adds space between list items */
    line-height: 1.5; /* Adjusts line spacing within each item */
}
</style>