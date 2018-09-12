<template>
  <div class="index">
    <navbar></navbar>
    
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import ButtonNavbar from '../components/ButtonNavbar'

export default {
  name: 'Index',
  data () {
    return {}
  },
  components: { Navbar, ButtonNavbar }
}
</script>