<template>
  <header id="intro" v-bind:style="{ 'background-color': bgColor}" class="uk-inline uk-height-large uk-width-1-1" uk-height-viewport="offset-top: true">
    <div class="uk-position-top-center intro-logo">
      <img src="~assets/cover-intro-logo.png" :alt="settings.app.title">
    </div>

    <div class="uk-position-top-center intro-animation uk-visible@m">
      <img src="~assets/cover-intro-animation.png" class="fa-spin" :alt="settings.app.title">
    </div>

    <div class="uk-position-left intro-botsman-white">
      <img src="~assets/botsman-white.png" :alt="settings.app.title">
    </div>

    <div class="uk-position-right intro-botsman-blue">
      <img src="~assets/botsman-blue.png" :alt="settings.app.title">
    </div>

    <div class="uk-position-right animation-move-right">
      <img src="~assets/logo-bird.png" class="animation-bounce" :alt="settings.app.title">
    </div>

    <div class="uk-position-bottom-center uk-width-5-6 uk-overlay uk-overlay-default intro-heading">
      <h1 class="uk-text-center">{{widgets.hero.intro.title}}</h1>
    </div>
  </header>
</template>
<script>
  export default {
    computed: {
      settings () { return this.$store.state.settings },
      widgets () { return this.$store.state.widgets },
      bgColor () {
        var colors = ['#ea7069', '#fdd35a', '#b6da61', '#f18f8c', '#dcd060', '#a99255', '#5c9054']
        return colors[Math.floor(Math.random() * colors.length)]
      }
    }
  }
</script>
<style>
  #intro {
    background: linear-gradient(transparent 50%, white 50%);
    background-size: 5em 5em;
  }

  #intro .intro-heading {
    bottom: 50px;
  }

  #intro .intro-animation img {
    -webkit-animation: fa-spin 30s linear 0s normal none infinite running;
    animation: fa-spin 30s linear 0s normal none infinite running;
  }

  #intro .intro-animation {
    left: 50%;
    margin-left: -168px;
    top: 170px;
  }
  #intro .intro-botsman-white {
    top: 130px;
  }
  #intro .intro-botsman-blue {
    top: 130px;
  }

  #intro .animation-bounce {
    -webkit-animation: bounce 20s 1 linear;
    animation: bounce 20s 1 linear;
  }

  #intro .animation-move-right {
    top: 80px;
    right: 50%;
    margin-right: -350px;

    -webkit-animation: move-right 20s 1 cubic-bezier(.37,.55,.49,.67);
    animation: move-right 20s 1 cubic-bezier(.37,.55,.49,.67);
  }

  @keyframes move-right {
    0% {
      transform: translateX(30em);
    }
    15%, 20% {
      transform: translateX(0em);
    }

    70%, 100% {
      transform: translateX(0em);
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(-6em);
      animation-timing-function: cubic-bezier(.51,.01,.79,.02);
    }
    5% {
      transform: translateY(-4em);
      animation-timing-function: cubic-bezier(.19,1,.7,1);
    }
    10% {
      transform: translateY(-2em);
      animation-timing-function: cubic-bezier(.51,.01,.79,.02);
    }
    15% {
      transform: translateY(0em);
      animation-timing-function: cubic-bezier(.19,1,.7,1);
    }
    20% {
      transform: translateY(-4em);
      animation-timing-function: cubic-bezier(.51,.01,.79,.02);
    }
    25% {
      transform: translateY(0em);
      animation-timing-function: cubic-bezier(.19,1,.7,1);
    }
    35% {
      transform: translateY(-4em);
      animation-timing-function: cubic-bezier(.51,.01,.79,.02);
    }
    45% {
      transform: translateY(0em);
      animation-timing-function: cubic-bezier(.19,1,.7,1);
    }
    70%, 100% {
      transform: translateY(0em);
      animation-timing-function: cubic-bezier(.51,.01,.79,.02);
    }
  }


  @media only screen
  and (min-device-width: 320px) {
    #intro .intro-botsman-white {
      left: -70px;
    }
    #intro .intro-botsman-blue {
      right: -70px;
    }
  }

  @media only screen
  and (min-device-width: 667px) {
    #intro .intro-botsman-white {
      left: 0;
    }
    #intro .intro-botsman-blue {
      right: 0;
    }
  }

  @media only screen
  and (min-device-width: 1024px)
  and (orientation: landscape) {
    #intro .intro-logo {
      top: 80px;
    }
  }
</style>
