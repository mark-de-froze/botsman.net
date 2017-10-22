<template>
  <section id="products" class="uk-width-1-1 uk-height-viewport">
    <div class="uk-container uk-padding-remove uk-width-5-6">
      <hr class="uk-margin-medium-top">
      <h2 class="uk-text-center" uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Сухарики пшеничные "Боцман"</h2>

      <div class="uk-child-width-1-4@m" uk-grid uk-height-match="target: .uk-card-title">
        <div v-for="(product, index) in orderBy(products, 'updated_at')" class="uk-card">
          <div class="uk-card-media-top">
            <img :src="product.image" class="shake-slow">
          </div>
          <div class="uk-padding-small">
            <div class="uk-card-title uk-text-center">{{product.title}}</div>
            <div class="uk-margin-small-top uk-text-center">
              <button class="uk-margin-small-right uk-button uk-button-primary" v-bind:uk-toggle="product.id | formatTarget" type="button">Подробнее</button>
            </div>
          </div>
        </div>
      </div>

      <hr class="uk-margin-medium-bottom">
    </div>

    <div v-for="(product, index) in products">
      <div v-bind:id="product.id | formatId" uk-modal class="uk-modal-full">
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
          <div class="uk-cover-container" uk-height-viewport>
            <img :src="product.image" alt="" uk-cover>
          </div>
          <div class="uk-padding-large">
            <h1>{{product.title}}</h1>
            <p>{{product.content}}</p>
            <div uk-grid class="uk-child-width-1-2@m">
              <dl class="uk-description-list uk-description-list-divider">
                <dt>Состав продукта</dt>
                <dd>{{product.properties.composition}}</dd>

                <dt>Нарезка</dt>
                <dd>{{product.properties.form}}</dd>
              </dl>
              <dl class="uk-description-list uk-description-list-divider">
                <dt>Вес упаковки</dt>
                <dd>{{product.properties.weight}}</dd>

                <dt>Срок реализации</dt>
                <dd>{{product.properties.expiry_date}}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
  export default {
    filters: {
      formatId: function (value) {
        value = 'product_' + value + 1
        return value
      },
      formatTarget: function (value) {
        value = 'target: #product_' + value + 1
        return value
      }
    },
    computed: {
      products () { return this.$store.state.category.products.data }
    }
  }
</script>
