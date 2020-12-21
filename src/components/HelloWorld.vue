<template>
<div>
  <sidebarMenu :menu="menu" :collapsed="true">
      <span slot="toggle-icon"><i class="fa fa-expand" aria-hidden="true">filter</i></span>
  </sidebarMenu>
  <MainContent/>
</div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import MainContent from './mainContent';

export default {
   components: {
        SidebarMenu, MainContent
  },

  data(){
    return {
        menu: [
            {
                header: true,
                title: 'Main Navigation',
                hiddenOnCollapse: true
            },
            {
                title: 'filters',
            },
            {
                title: 'dummy filters',
                child: [
                    {
                        title: 'Sub Link'
                    }
                ]
            },
        ]
    }
  }
}
</script>

<style scoped>

</style>
