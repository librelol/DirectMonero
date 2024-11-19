<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>
              <span class="headline">Login</span>
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
                  v-model="password"
                  label="Password"
                  :rules="[rules.required]"
                  type="password"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">Login</v-btn>
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
        password: '',
        rules: {
          required: value => !!value || 'Required.',
        },
      };
    },
    methods: {
      async login() {
        if (this.$refs.form.validate()) {
          const authStore = useAuthStore();
          await authStore.login(this.username, this.password);
          if (authStore.token) {
            this.$router.push('/');
          } else {
            alert('Invalid credentials');
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