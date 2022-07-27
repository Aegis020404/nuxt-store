<template>
  <div class="control">
    <div class="title">Добавление товара</div>
    <form class="settings" @submit.prevent="addItem">
      <div class="item">
        <div class="name">Наименование товара <div class="required"/> </div>
        <input v-model="name" type="text" class="input" placeholder="Введите наименование товара">
<!--        <div class="miniAlert">{{required[0] ? 'Поле является обязательным' : '' }}</div>-->
      </div>
      <div class="item">
        <div class="name">Описание товара</div>
        <textarea v-model="description" class="input" placeholder="Введите описание товара"></textarea>
      </div>
      <div class="item">
        <div class="name">Ссылка на изображение товара <div class="required"/>  </div>
        <input v-model="href" type="text" class="input" placeholder="Введите ссылку">
<!--        <div class="miniAlert">{{required[1] ? 'Поле является обязательным' : '' }}</div>-->
      </div>
      <div class="item">
        <div class="name">Цена товара <div class="required"/>  </div>
        <input v-model="price" type="text" class="input" placeholder="Введите цену">
<!--        <div class="miniAlert">{{required[2] ? 'Поле является обязательным' : '' }}</div>-->
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
    }
  },

  methods: {
    addItem() {

      if(this.name && this.href && this.price) {
        this.$store.commit('ADD_LIST', {name: this.name, description: this.description, href: this.href, price: this.price})
        this.description = ''
        this.name = ''
        this.href = ''
        this.price = ''
      } else {


      }
    }


  }
}
</script>
