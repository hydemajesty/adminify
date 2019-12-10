<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-list>
          <v-list-tile avatar ripple
              v-for="item in items" :key="item.link"
              :href="item.link" :target="item.target">
            <v-list-tile-avatar>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
module.exports = {
  data: () => ({
    items: [
      {
        name: '开发／报错',
        link: 'https://dev.capitaledge.cn/git/dev/quants/PerfPortal',
        target: '_blank',
        icon: 'bug_report'
      }, {
        name: '联系邮箱',
        link: 'mailto:nav-tools@capitaledge.cn?Subject=' + encodeURIComponent('[PerfPortal] Query'),
        icon: 'email'
      }
    ]
  })
}
</script>

<style scoped>
</style>
