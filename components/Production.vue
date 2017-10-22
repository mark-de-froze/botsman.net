<template>
  <section id="production" class="uk-inline uk-background-fixed uk-background-center-center uk-width-1-1 uk-light uk-height-viewport">
    <div class="uk-overlay-primary uk-position-cover">
      <div class="uk-container uk-padding-remove uk-width-5-6">
        <div class="uk-text-center uk-margin-medium-top ">
          <h2 class="uk-heading-primary" uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">{{widgets.top.production.title}}</h2>
          <h3 class="uk-text-muted" uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">{{widgets.top.production.subtitle}}</h3>
        </div>
        <div v-html="widgets.top.production.content"></div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    computed: {
      settings () { return this.$store.state.settings },
      widgets () { return this.$store.state.widgets }
    }
  }
</script>
<style>
  #production {
    background-image: url('~assets/index-cover-production.jpg');
  }
</style>
