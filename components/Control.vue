<template>
  <div class="control">
    <div class="title">Добавление товара</div>
    <form class="settings" @submit.prevent="addItem">
      <div class="item">
        <div class="name">Наименование товара <div class="required"/> </div>
        <input v-model="name" type="text" :class="!name && required ? 'input inputRequired' : 'input' "
               placeholder="Введите наименование товара">
        <div class="miniAlert">{{!name && required ? 'Поле является обязательным' : '' }}</div>
      </div>
      <div class="item">
        <div class="name">Описание товара</div>
        <textarea v-model="description" class="input" placeholder="Введите описание товара"></textarea>
      </div>
      <div class="item">
        <div class="name">Ссылка на изображение товара <div class="required"/>  </div>
        <input v-model="href" type="text" :class="!href && required ? 'input inputRequired' : 'input' "
               placeholder="Введите ссылку">
        <div class="miniAlert">{{!href && required ?  'Поле является обязательным' : '' }}</div>
      </div>
      <div class="item">
        <div class="name">Цена товара <div class="required"/>  </div>
        <input v-model="price" type="text" :class="!price && required ? 'input inputRequired' : 'input' "
               placeholder="Введите цену">
        <div class="miniAlert">{{!price && required ? 'Поле является обязательным' : '' }}</div>
        <div class="miniAlert">{{!price && notInteger ? 'Поле должно содеражать только числа' : '' }}</div>
      </div>


      <div>
        <button :class="name && href && price ? 'btn btn-active' : 'btn' " type="submit" >
          Добавить товар
        </button>
      </div>
    </form>

  </div>
</template>



<script>
export default {
  data(){
    return {
      name:        '' ,
      description: '' ,
      href:        '' ,
      price:       '' ,
      required: false,
      notInteger: false
    }
  },

  methods: {
    addItem() {

      if(this.name && this.href && this.price) {
        if(Number.isInteger(+this.price) ) {
          this.$store.commit('ADD_LIST', {
            name: this.name,
            description: this.description,
            href: this.href,
            price: this.price,
            date: Date.now()
          })
          this.description = ''
          this.name = ''
          this.href = ''
          this.price = ''
          this.required = false
          this.notInteger = false
        } else {
          this.price = ''
          this.notInteger = true
        }
      } else {
        this.required = true

      }
    }


  }
}
</script>
