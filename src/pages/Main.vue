<template>
  <v-app :dark="dark">
    <v-navigation-drawer app clipped :mobile-break-point="0"  :dark="dark" v-model='drawer'>
      <div style="padding-left:5em">
        <v-switch :label="(!dark ? 'Light' : 'Dark') + ' Theme'" v-model="dark" :dark="dark" hide-details></v-switch>
      </div>
      <v-divider>
      </v-divider>
      <v-list dense>
        <template v-for='item in menu'>
          <v-list-group v-if='item.items' :group='item.group' :key='item'>
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
            <v-list-tile v-for='subItem in item.items' :key='subItem.href' :to='subItem.href' :router='!subItem.target' ripple :disabled='subItem.disabled' :target='subItem.target'>
              <v-list-tile-action v-if='subItem.icon'>
                <v-icon>{{subItem.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{subItem.title}}</v-list-tile-title>
              </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-subheader v-else-if='item.header' :key='item.header'>{{ item.header }}</v-subheader>
            <v-divider v-else-if='item.divider' :key='item.divider'></v-divider>
            <v-list-tile v-else :to='item.href' router ripple :disabled='item.disabled' :title="item.title" :key='item'>
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
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
    <v-toolbar app clipped-left :class="theme">
      <v-layout align-center>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title slot="activator">
          <v-avatar tile v-if="logo">
            <v-img :src="logo" :alt="company"></v-img>
          </v-avatar>
          {{project}}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <v-btn icon slot="activator">
            <v-icon dark> format_paint </v-icon>
          </v-btn>
          <v-list v-for="n in colors" :key="n" :class="n" @mouseover.native="theme = n"></v-list>
        </v-menu>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fluid>
          <v-slide-y-transition mode='out-in'>
            <router-view></router-view>
          </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer app fixed height="auto" class="elevation-2" text-xs-center>
      <v-card class="flex" flat tile>
        <v-card-actions class="justify-center">{{copyright}}</v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data: () => ({
    project: '基金产品绩效系统',
    company: '国富投资CapitalEdge',
    logo: '../../static/logo_64x64T.png',
    copyright: ' © 2019 上海国富投资管理有限公司 版权所有',
    dark: false,
    theme: 'white',
    drawer: true,
    colors: ['white', 'blue', 'green', 'purple', 'red']
  }),
  computed: {
    ...mapState(['menu'])
  },
  methods: {
  }
}
</script>

