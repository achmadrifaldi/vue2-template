<template>
  <v-app-bar app absoulte clipped-left color="primary" dark flat>
    <v-toolbar-title class="text-uppercase font-weight-black text-h5 pr-3">
      {{ title }}
    </v-toolbar-title>

    <v-spacer />

    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex flex-column" v-bind="attrs" v-on="on">
          <div class="d-flex align-center">
            <span class="font-weight-bold text-truncate header-name">
              {{ username }}
            </span>
            <v-icon medium color="white darken-2"> mdi-menu-down </v-icon>
          </div>
          <span class="grey--text text--lighten-2 header-role">
            {{ role }}
          </span>
        </div>
      </template>
      <v-list>
        <v-list-item @click="logout()">
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { APP_TITLE } from '@/modules/app/constant/app.constant';

export default {
  name: 'AppHeaderDefault',

  computed: {
    title() {
      return APP_TITLE;
    },

    username() {
      return 'Jhon Doe';
    },

    role() {
      return 'Administrator';
    },
  },

  methods: {
    logout() {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-role {
  width: 170px;
}

.header-name {
  width: 150px;
}
</style>
