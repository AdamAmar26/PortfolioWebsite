<template>
    <v-container>
      <v-timeline>
        <v-timeline-item v-for="jobs in getAllJobs.slice().reverse()">
          <Jobs 
            :title="jobs.title"
            :company="jobs.company"
            :details="jobs.details"
            :end-date="jobs.endDate"
            :start-date="jobs.startDate"/>
        </v-timeline-item>
      </v-timeline>
    </v-container>
</template>
  
<script>
import { useJobsStore } from '@/stores/jobs';
import { mapState, mapActions } from 'pinia';
import Jobs from '@/components/Jobs.vue';
    
    export default{
        components:{
            Jobs,
        },
        methods:{
          ...mapActions(useJobsStore, ['getAllJobsFromDB']),
        },
        computed: {
          ...mapState(useJobsStore, ['getAllJobs', 'getQueryList']),
        },
        created() {
            this.getAllJobsFromDB();            
        },
    }
</script>
  