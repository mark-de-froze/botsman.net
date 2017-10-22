<template>
  <div>
    <div id="offcanvas" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">

        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li class="uk-active"><a href="#intro" uk-scroll>{{settings.system.app.name}}</a></li>
          <li v-for="item in links.main" v-show="item.is_visible_offcanvas">
            <a :href="item.url" uk-scroll>{{item.title}}</a>
          </li>
          <li class="uk-nav-divider"></li>
          <li><a href="#contact" uk-scroll>{{ settings.system.contact.phone_number }}</a></li>
        </ul>
      </div>
    </div>
    <div id="navbar" class="uk-background-gradient">
      <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: ; top: 0">
        <nav class="uk-navbar-container uk-navbar-transparent uk-background-gradient uk-light">
          <div class="uk-container uk-padding-remove uk-width-5-6">
            <div uk-navbar>
              <div class="uk-navbar-left">
                <a href="#intro" uk-scroll class="uk-navbar-item uk-logo">{{settings.system.app.name}}</a>
                <ul class="uk-navbar-nav uk-visible@m">
                  <li v-for="item in links.main" v-show="item.is_visible_main">
                    <a :href="item.url" uk-scroll>{{item.title}}</a>
                  </li>
                </ul>
              </div>
              <div class="uk-navbar-right">
                <a href="#offcanvas" uk-toggle class="uk-hidden@m" uk-icon="icon: menu"></a>
                <ul class="uk-navbar-nav uk-visible@m">
                  <li><a href="#contact" uk-scroll>{{ settings.system.contact.phone_number }}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      settings () { return this.$store.state.settings },
      links () { return this.$store.state.links }
    }
  }
</script>
<style>
  #navbar, .uk-navbar-item, .uk-navbar-nav>li>a, .uk-navbar-toggle {
    height: 50px;
  }
  .uk-background-gradient {
    background: linear-gradient( 90deg, transparent 80%, #79baeb 20%);
    background-size: 1em 1em;
    background-color: #68aad5;
    border: 1px solid #79baeb;
  }
  .uk-offcanvas-bar a, .uk-background-gradient a {
    color: #fff !important;
  }
  .uk-offcanvas-bar a:hover, .uk-background-gradient a:hover {
    color: #eee !important;
  }
  .uk-offcanvas-bar {
    background-color: #68aad5;
  }
</style>
