<template>
  <v-app :dark="dark" standalone>
    <v-navigation-drawer v-model='drawer' clipped :mobile-break-point="0" enable-resize-watcher :dark="dark">
      <div style="padding-left:5em">
        <v-switch :label="(!dark ? 'Light' : 'Dark') + ' Theme'" v-model="dark" :dark="dark" hide-details></v-switch>
      </div>
      <v-divider>
      </v-divider>
      <v-list dense>
        <template v-for='item in menu'>
          <v-list-group v-if='item.items' v-bind:group='item.group'>
            <v-list-tile :to='item.href' slot='item' :title="item.title">
              <v-list-tile-action>
                <v-icon> {{item.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title> {{item.title}}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for='subItem in item.items' :key='subItem.href' :to='subItem.href' v-bind:router='!subItem.target' ripple v-bind:disabled='subItem.disabled' v-bind:target='subItem.target'>
              <v-list-tile-action v-if='subItem.icon'>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{subItem.title}}</v-list-tile-title>
              </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-subheader v-else-if='item.header'>{{ item.header }}</v-subheader>
            <v-divider v-else-if='item.divider'></v-divider>
            <v-list-tile v-else :to='item.href' router ripple v-bind:disabled='item.disabled' :title="item.title">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{item.title}}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action v-if='item.subAction'>
                <v-icon>item.subAction</v-icon>
              </v-list-tile-action>
            </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-toolbar app clipped-left>
      <v-layout align-center>
        <v-toolbar-side-icon  @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title slot="activator">
          <v-avatar tile v-if="logo">
            <v-img :src="logo" :alt="company"></v-img>
          </v-avatar>
          {{pageTitle}}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <v-btn icon, dark, slot="activator">
            <v-icon dark> format_paint </v-icon>
          </v-btn>
          <v-list v-for="n in colors" :key="n" :class="n" @mouseover.native="theme = n"></v-list>
        </v-menu>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
    <v-footer app fixed height="auto" class="elevation-2">
      <v-card class="flex" flat tile>
        <v-card-actions class="justify-center">{{ copyright }}</v-card-actions>
      </v-card>
    </v-footer> -->





    <main>
      <v-container fluid>
        <v-alert v-bind='message' v-model='message.body' dismissible>{{message.body}}
          <v-slide-y-transition mode='out-in'>
            <router-view></router-view>
          </v-slide-y-transition>
        </v-alert>
      </v-container>
    </main>

  </v-app>

</template>

<script>

import { mapState } from 'vuex'

export default {
  data: () => ({
    dark: false,
    theme: 'primary',
    drawer: true,
    copyright: '© 2019 上海国富投资管理有限公司 版权所有',
    colors: ['blue', 'green', 'purple', 'red']
  }),
  computed: {
    ...mapState(['message', 'menu', 'pageTitle'])
  },
  methods: {
    changeLocale (to) {
      global.helper.ls.set('locale', to)
      this.$i18n.locale = to
    },
    fetchMenu () {
      // fetch menu from server
      this.$http.get('menu').then(({data}) => this.$store.commit('setMenu', data))
    }
  },

  created () {
    this.fetchMenu()
  }
}
</script>

