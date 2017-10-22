<template>
  <section id="contact" class="uk-width-1-1 uk-height-viewport uk-background-muted">
    <div class="uk-container uk-padding-remove uk-width-5-6">
      <div class="uk-margin-small-top uk-margin-small-bottom uk-text-center uk-child-width-1-3@m" uk-grid>
        <div>
          <h3>{{settings.system.app.name}}</h3>
        </div>
        <div>
          <h3>{{settings.system.contact.address}}</h3>
        </div>
        <div>
          <h3><a class="uk-link-reset" href="#contact" uk-scroll>{{settings.system.contact.phone_number}}</a></h3>
        </div>
      </div>
    </div>
    <div class="uk-inline uk-margin uk-width-1-1">
      <div class="uk-position-small uk-position-center-right">
        <div class="uk-card uk-card-default uk-card-body uk-height-large uk-width-1-1 uk-width-medium@s">
          <h4 class="uk-card-title">
            {{widgets.system.bottom.contact.subtitle}}
            <a href="#contact" uk-scroll>
              <span uk-scrollspy="cls: uk-animation-shake; repeat: true" class="uk-icon-button uk-button-danger" uk-icon="icon: bell"></span>
            </a>
          </h4>
          <div>
            <form v-on:submit.prevent="sendMail()">
              <div class="uk-margin">
                <input class="uk-input uk-width-1-1" type="text" placeholder="Ваше имя" required v-model="mail.from_name" name="mail_name">
              </div>
              <div class="uk-margin">
                <input class="uk-input uk-width-1-1" type="tel" placeholder="Ваш телефон" pattern="(\+?\d[- ]*){11,12}" v-model="mail.message" name="mail_phone">
              </div>
              <div class="uk-margin">
                <input class="uk-input uk-width-1-1" type="email" placeholder="Ваш e-mail" required v-model="mail.from_email" name="mail_email">
              </div>
              <div class="uk-margin">
                <button type="submit" class="uk-button uk-width-1-1 uk-button-default uk-button-large uk-button-danger" uk-scrollspy="cls: uk-animation-shake; repeat: true">{{widgets.system.bottom.contact.title}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-html="widgets.system.bottom.contact.content"></div>
    </div>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    computed: {
      mail () { return this.$store.state.mail },
      settings () { return this.$store.state.settings },
      widgets () { return this.$store.state.widgets }
    },
    methods: {
      sendMail () {
        axios.post('/site/mails', Object.assign(this.$store.state.mail, {api_key: process.env.apiKey}))
          .then((response) => {
            if (response.status === 201) {
              this.$store.state.mail = {
                from_name: '', message: '', from_email: ''
              }

              alert('Ваша заявка успешно отправлена.')
            }
          })
      }
    }

  }
</script>
