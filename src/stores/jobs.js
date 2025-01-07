import { defineStore } from 'pinia';
import { db } from '@/firebase/init.js'; 
import { addDoc, collection, query, getDocs, where } from 'firebase/firestore';

export const useJobsStore = defineStore('job-store', {
  state: () => ({
    jobsList: [],
    queryList: [],
  }),
  getters: {
    getAllJobs: (state) => state.jobsList,
    getQueryList: (state) => state.queryList,
  },
  actions: {
    async getAllJobsFromDB() {
        const q = query(collection(db, 'jobs'));
        const querySnapshot = await getDocs(q);
        this.jobsList = querySnapshot.docs.map((doc) => doc.data());
    },
  },
});
