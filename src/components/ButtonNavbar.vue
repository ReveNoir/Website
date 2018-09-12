<template>
  <div id="button-navbar">
    <a :href="href" class="bouton nk-btn nk-btn-color-main-1 link-effect-4 ready">
	    <span class="inner">
		    <span class="haut">
			    <span>
      		  <span>{{ content }}</span>
    		  </span>
		    </span>
		    <span class="bas">
			    <span>
        	  <span>{{ content }}</span>
    		  </span>
		    </span>
		    <span class="trait">
			    <span>
        	  <span>{{ content }}</span>
			    </span>
		    </span>
	    </span>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      content: String,
      href: String
    },
    data () {

    }
  }
</script>

<style>
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