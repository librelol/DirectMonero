<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>
              <span class="headline">Register</span>
            </v-card-title>
            <v-card-text>
              <v-form v-model="valid" ref="form">
                <v-text-field
                  v-model="username"
                  label="Username"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="[rules.required, rules.email]"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  :rules="[rules.required]"
                  type="password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="confirmPassword"
                  label="Confirm Password"
                  :rules="[rules.required, rules.matchPassword]"
                  type="password"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="register">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { useAuthStore } from '@/stores/auth';
  
  export default {
    data() {
      return {
        valid: false,
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        rules: {
          required: value => !!value || 'Required.',
          email: value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
          matchPassword: value => value === this.password || 'Passwords must match.',
        },
      };
    },
    methods: {
      async register() {
        if (this.$refs.form.validate()) {
          const authStore = useAuthStore();
          await authStore.register(this.username, this.password);
          if (authStore.token) {
            this.$router.push('/');
          } else {
            alert('Error registering user');
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .headline {
    font-weight: bold;
  }
  </style>