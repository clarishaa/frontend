<template>
  <Headd />
  <Resources />

  <Main/>
  <body class="sb-nav-fixed">
    <Navbar/>
    <div id="layoutSidenav">
  <Sidebar/>
    </div>

  </body>
</template>
    
<script>
// @ is an alias to /src
import Headd from '@/components/Admin/Headd.vue'
import Resources from '@/components/Admin/Resources.vue'
import Sidebar from '@/components/Admin/Sidebar.vue'
import Navbar from '@/components/Admin/Navbar.vue'

export default {
  name: 'MainAdmin',
  components: {
    Headd, Resources,Navbar, Sidebar
  }
}
</script>
    