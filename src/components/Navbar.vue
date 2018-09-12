<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container white-color">
        <a class="navbar-brand white-color" href="#">{{ name.toUpperCase() }}</a>
        <button class="navbar-toggler custom-toggler white-color" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div class="container">
            <ul class="navbar-nav">
              <li class="nav-item active" v-for="route in routes" :key="route.name">
                <button-navbar v-if="route.hide" :content="route.name" :href="route.path"></button-navbar>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>  

<a class="waves-effect waves-light btn">button</a>

  </div>
</template>

<script>
import { routes } from '../router'
import ButtonNavbar from './ButtonNavbar' 

export default {
  name: 'navbar',
  data () {
    return { 
      routes,
      name: 'Cataclysm'
    }
  },
  components: { ButtonNavbar }
}
</script>

<style lang="scss" scoped>
  $gray: #0E0E0E;

  .navbar {
    background-color: $gray !important;
  }

  .white-color {
    color: white !important;
  }

  .custom-toggler.navbar-toggler {
    border-color: white;
  }

  .custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }

  .bouton {
    position: relative;
    padding: 12px 30px;
    font-size: 14px;
	 color: #e08821;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: rgba(14, 14, 14, .9);
    border: none;
    border-radius: 2px;
    -webkit-transition: .2s box-shadow, .2s background-color, .2s color, .2s transform;
    -o-transition: .2s box-shadow, .2s background-color, .2s color, .2s transform;
    transition: .2s box-shadow, .2s background-color, .2s color, .2s transform
  }
  .bouton,
  .bouton:active,
  .bouton:focus,
  .bouton:hover {
      text-decoration: none
  }
  .bouton.hover,
  .bouton:hover {
      background-color: #0e0e0e;
      -webkit-box-shadow: 0 5px 15px 0 rgba(14, 14, 14, .4);
      box-shadow: 0 5px 15px 0 rgba(14, 14, 14, .4);
      -webkit-transform: translateY(-2px);
      -ms-transform: translateY(-2px);
      transform: translateY(-2px)
  }
  .bouton::before {
      content: "";
      position: absolute;
      display: block;
      top: 4px;
      right: 4px;
      bottom: 4px;
      left: 4px;
      border: 1px solid;
      border-radius: 0;
      -webkit-transition: .3s background-color, .3s border-color;
      -o-transition: .3s background-color, .3s border-color;
      transition: .3s background-color, .3s border-color;
      z-index: 1
  }
  .bouton,
  .bouton::after,
  .bouton::before {
      border-color: #b56d19;
  }
  .bouton:hover {
      color: #e08821
  }
  .bouton:active {
      color: #885213
  }
  .bouton .inner {
      position: relative;
      display: inline-block
  }
  .bouton .inner::after {
      content: "";
      position: absolute;
      display: block;
      top: 50%;
      right: -10px;
      left: -10px;
      border-bottom: 1px solid;
      opacity: .5;
      -webkit-transition: .2s transform;
      -o-transition: .2s transform;
      transition: .2s transform;
      -webkit-transform: scaleX(0);
      -ms-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 100% 0;
      -ms-transform-origin: 100% 0;
      transform-origin: 100% 0
  }
  .bouton .inner .trait {
      opacity: 0
  }
  .bouton .inner .haut,
  .bouton .inner .bas {
      position: absolute;
      top: -50%;
      overflow: hidden;
      -webkit-transition: .2s transform;
      -o-transition: .2s transform;
      transition: .2s transform
  }
  .bouton .inner .haut > span,
  .bouton .inner .bas > span {
      display: inline-block;
      -webkit-transform: translateY(50%);
      -ms-transform: translateY(50%);
      transform: translateY(50%)
  }
  .bouton .inner .bas {
      top: 50%
  }
  .bouton .inner .bas > span {
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%)
  }
  .bouton:hover .inner::after {
      -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0 0;
      -ms-transform-origin: 0 0;
      transform-origin: 0 0
  }
  .bouton:hover .inner .haut {
      -webkit-transform: translateX(-2px);
      -ms-transform: translateX(-2px);
      transform: translateX(-2px)
  }
  .bouton:hover .inner .bas {
      -webkit-transform: translateX(2px);
      -ms-transform: translateX(2px);
      transform: translateX(2px)
  }
</style>
