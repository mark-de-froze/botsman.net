<template>
  <section id="fun" class="uk-inline uk-background-fixed uk-background-center-center uk-width-1-1 uk-light uk-height-viewport">
    <div class="uk-overlay-primary uk-position-cover">
      <div class="uk-container uk-padding-remove uk-width-5-6">
        <div class="uk-text-center uk-margin-medium-top ">
          <h2 class="uk-heading-primary" uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">{{widgets.bottom.fun.title}}</h2>
        </div>
        <div v-html="widgets.bottom.fun.content"></div>
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
  #fun {
    background-image: url('~assets/index-cover-fun.jpg');
  }
  #fun .fun-number {
    color: #d9534f;
    font-size: 50px;
  }
  #fun .fun-number span {
    font-size: 50px;
  }
  #fun .fun-text {
    font-size: 25px;
  }
</style>
