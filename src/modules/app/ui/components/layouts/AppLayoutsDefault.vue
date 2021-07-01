<template>
  <v-app>
    <AppNavigationDefault />
    <AppHeaderDefault />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeaderDefault from '../headers/AppHeaderDefault.vue';
import AppNavigationDefault from '../navigations/AppNavigationDefault.vue';

export default {
  name: 'AppLayoutsDefault',

  components: {
    AppHeaderDefault,
    AppNavigationDefault,
  },
};
</script>
