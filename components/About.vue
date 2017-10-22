<template>
  <section id="about" class="uk-width-1-1 uk-height-viewport uk-background-default">
    <div class="uk-container uk-padding-remove uk-width-5-6">
      <div class="uk-text-center uk-margin-large-top ">
        <h2 class="uk-heading-primary" uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">{{widgets.system.top.about.title}}</h2>
        <h3 class="uk-text-muted" uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">{{widgets.system.top.about.subtitle}}</h3>
      </div>
      <div v-html="widgets.system.top.about.content"></div>
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
