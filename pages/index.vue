<template>
  <div class="uk-offcanvas-content">
    <div>
      <navbar/>
    </div>
    <intro/>
    <hr class="uk-margin-xlarge-top">
    <about/>
    <production/>
    <products/>
    <fun/>
    <contact/>

    <footer class="uk-background-muted">
      <div class="uk-container uk-padding-remove uk-width-5-6">
        <div class="uk-float-left">
          <p>Copyright &copy; {{ settings.system.app.copyright }}
          <address>
            <strong>{{settings.system.app.name}}</strong>
            {{ settings.system.contact.address }}
            <abbr title="Phone">Тел:</abbr> <a href="#contact" uk-scroll>{{ settings.system.contact.phone_number }}</a>
          </address>
        </div>

        <div class="uk-float-right">
          Made with love by <a href="http://markdefroze.com">Mark de Froze</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Intro from '~/components/Intro.vue'
import About from '~/components/About.vue'
import Production from '~/components/Production.vue'
import Products from '~/components/Products.vue'
import Fun from '~/components/Fun.vue'
import Contact from '~/components/Contact.vue'
import axios from '~/plugins/axios'

export default {
  computed: {
    settings () { return this.$store.state.settings }
  },
  async fetch ({ store, env }) {
    let [settingsRes, settingsSystemRes, widgetsRes, widgetsSystemRes, linksRes, productsRes] = await Promise.all([
      axios.get('/site/settings', {params: {api_key: env.apiKey}}),
      axios.get('/site/settings', {params: {api_key: env.apiKeyMain}}),
      axios.get('/site/widgets', {params: {api_key: env.apiKey}}),
      axios.get('/site/widgets', {params: {api_key: env.apiKeyMain}}),
      axios.get('/site/links', {params: {api_key: env.apiKey}}),
      axios.get('/shop/categories/suxariki-boczman', {params: {api_key: env.apiKeyMain}})
    ])

    store.commit('set', { type: 'settings', data: Object.assign(settingsRes.data, {system: settingsSystemRes.data}) })
    store.commit('set', { type: 'widgets', data: Object.assign(widgetsRes.data, {system: widgetsSystemRes.data}) })
    store.commit('set', { type: 'links', data: linksRes.data })
    store.commit('set', { type: 'category', data: productsRes.data })
  },
  head () {
    return {
      title: this.$store.state.settings.app.title,
      meta: [
        { hid: 'description', name: 'description', content: this.$store.state.settings.app.description }
      ]
    }
  },
  components: {
    Navbar, Intro, About, Production, Products, Fun, Contact
  }
}
</script>

<style>
  body {
    overflow-x: hidden;
  }
  .uk-overlay-primary {
    background: rgba(0, 0, 0, 0.7);
  }

  @media only screen
  and (min-device-width: 320px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {
    .uk-background-fixed {
      height: 1250px;
    }
  }

  @media only screen
  and (min-device-width: 320px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
    .uk-background-fixed {
      height: 1475px;
    }
  }

  /* ----------- iPhone 6s, iPhone 6s Plus and Galaxy S5 ----------- */
  @media only screen
  and (min-device-width: 360px)
  and (orientation: landscape) {
    .uk-background-fixed {
    }
  }

  @media only screen
  and (min-device-width: 360px)
  and (orientation: portrait) {
    .uk-background-fixed {
      height: 1375px;
      min-height: 1375px;
    }
  }

  /* ----------- iPad  ----------- */

  @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px) {
    .uk-background-fixed {
      height: auto;
      min-height: 750px;
    }
  }

  @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait) {
    #intro, #about, #contact {
      height: 100%;
      min-height: 100%;
    }
  }
</style>
