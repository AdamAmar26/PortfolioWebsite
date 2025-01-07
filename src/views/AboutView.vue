<template>
  <v-container class="about-page" fluid>
    <v-row justify="center" class="my-10">
      <!-- University Picture -->
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="450">
          <img src="@/assets/dpuPic.jpg" alt="University Picture" />
        </v-avatar>
      </v-col>

      <!-- About Me Text -->
      <v-col cols="12" md="8">
        <v-card outlined>
          <v-card-title class="text-h5 font-weight-bold">About Me</v-card-title>
          <v-card-text>
            <p>
              I am a dedicated and passionate technology enthusiast with interests in <strong>web development</strong>,
              <strong>cybersecurity</strong>, and <strong>IT support</strong>. I thrive on learning and implementing
              innovative solutions to real-world problems, especially in the fields of network security and secure
              software development.
            </p>
            <p>
              As a student at <strong>DePauw University</strong> majoring in <strong>Computer Science and Mathematics</strong>,
              I have cultivated a strong foundation in areas like <strong>Data Structures</strong>, <strong>Web Programming</strong>,
              and <strong>Cybersecurity</strong>, complemented by practical experience in <strong>IT support</strong> and
              <strong>custom software design</strong>.
            </p>

            <h3 class="text-h6 font-weight-bold my-4">Education</h3>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-body-1 font-weight-bold">DePauw University</v-list-item-title>
                  <v-list-item-subtitle>
                    Bachelor of Arts in Computer Science and Mathematics (Expected: May 2026)
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <strong>GPA:</strong> 3.73/4.0
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <strong>Relevant Courses:</strong> Data Structures, Computer Systems, Foundations of Computation, Object-Oriented Software Development,
                    Web Programming and Cybersecurity, Data Mining, Calculus 3
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <h3 class="text-h6 font-weight-bold my-4">Skills</h3>
            <v-row>
              <v-chip-group row>
                <v-chip>Java</v-chip>
                <v-chip>Python</v-chip>
                <v-chip>Information security</v-chip>
                <v-chip>Firewall configuration</v-chip>
                <v-chip>Javascript</v-chip>
                <v-chip>Vue.js</v-chip>
                <v-chip>Vuetify</v-chip>
                <v-chip>Firebase</v-chip>
                <v-chip>Website Development & Deployment</v-chip>
              </v-chip-group>
            </v-row>

            <h3 class="text-h6 font-weight-bold my-4">Leadership</h3>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-body-1 font-weight-bold">President</v-list-item-title>
                  <v-list-item-subtitle>
                    Moroccan Student Organization, DePauw University (08/2023 - Present)
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    Spearheaded cultural and community engagement initiatives to promote Moroccan heritage on campus.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-body-1 font-weight-bold">Vice-President</v-list-item-title>
                  <v-list-item-subtitle>
                    Beta Theta Pi, DePauw University (11/2024 - Present)
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    Led strategic initiatives to enhance academic excellence and foster leadership among members.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-body-1 font-weight-bold">Scholarship and Academic Chair</v-list-item-title>
                  <v-list-item-subtitle>
                    Beta Theta Pi, DePauw University (11/2023 - 11/2024)
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    Coordinated academic support programs to improve chapter GPA and individual academic performance.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

