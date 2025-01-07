import { defineStore } from 'pinia';
import { db } from '@/firebase/init.js';
import { addDoc, collection, query, getDocs, where } from 'firebase/firestore';

export const useProjectsStore = defineStore('project-store', {
  state: () => ({
    projectsList: [],
    queryList: [],
  }),
  getters: {
    getAllProjects: (state) => state.projectsList,
    getQueryList: (state) => state.queryList,
  },
  actions: {
    async getAllProjectsFromDB() {
        const q = query(collection(db, 'projects'));
        const querySnapshot = await getDocs(q);
        this.projectsList = querySnapshot.docs.map((doc) => doc.data());
    },
  },
});
