<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-text-field
        label="Name"
        v-model="contactForm.name"
        :rules="[rules.required]"
        outlined
        class="custom-input"
      ></v-text-field>
      <v-text-field
        label="Email"
        v-model="contactForm.email"
        :rules="[rules.required, rules.email]"
        outlined
        class="custom-input"
      ></v-text-field>
      <v-textarea
        label="Message"
        v-model="contactForm.message"
        :rules="[rules.required]"
        outlined
        class="custom-input"
      ></v-textarea>
      <v-btn :disabled="!valid" @click="submitForm" color="primary">
        Submit
      </v-btn>
    </v-form>
    <v-alert v-if="success" type="success" dismissible>
      Thank you! Your message has been sent.
    </v-alert>
    <v-alert v-if="error" type="error" dismissible>
      Oops! Something went wrong. Please try again.
    </v-alert>
  </v-container>
</template>

<script>
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/init.js';

export default {
  name: 'ContactPage',
  data() {
    return {
      valid: false,
      success: false,
      error: false,
      contactForm: {
        name: '',
        email: '',
        message: '',
      },
      rules: {
        required: (value) => !!value || 'This field is required.',
        email: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        await addDoc(collection(db, 'contacts'), {
          ...this.contactForm,
          timestamp: new Date(),
        });
        this.success = true;
        this.error = false;
        this.clearForm();
      } catch (err) {
        console.error('Error submitting form:', err);
        this.success = false;
        this.error = true;
      }
    },
    clearForm() {
      this.contactForm.name = '';
      this.contactForm.email = '';
      this.contactForm.message = '';
    },
  },
};
</script>

<style scoped>
.custom-input {
  background-color: transparent; /* Dark background for the input */
  color: white; /* White text for better readability */
}

.custom-input input,
.custom-input textarea {
  color: white; /* Ensures text inside input/textarea is white */
}

.custom-input label {
  color: #bdc3c7; /* Softer color for labels */
}

.custom-input .v-input__control {
  border-color: #95a5a6; /* Subtle border color */
}

.custom-input .v-input__control:focus {
  border-color: #3498db; /* Highlight border on focus */
}
</style>
