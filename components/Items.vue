<template>
  <div class="visible">
    <div class="sortWrap">
      <select class="sort" v-model="sorting">
        <option value="default">По умолчанию</option>
        <option value="priceMin">По убыванию цены</option>
        <option value="priceMax">По повышению цены</option>
        <option value="name">По наименованию</option>
      </select>
    </div>

    <transition-group name="list-complete" tag="div" class="cards" >
        <div class="card list-complete-item" v-for="list in $store.state.lists" @mouseenter="onEnter(list.date)"
             @mouseleave="onLeave" :key="list.date">
          <div class="trash" :hidden="!active || list.date !==currentDate" @click="deleteItem(list.date)">
            <img src="~static/trash.png" alt="trash">
          </div>
          <div class="imageWrap">
            <img class="image" :src="list.href" @error="replaceSrc" alt="image"/>

          </div>
          <div class="data">
            <div class="title">{{ list.name }}</div>
            <div class="description">{{ list.description }}
            </div>
            <div class="price">{{ list.price }} руб.</div>
          </div>
        </div>
    </transition-group>



  </div>
</template>


<script>
export default {
  data() {
    return {
      sorting: 'default',
      currentDate: false,
      active: false,
    }
  },
  methods: {
    onEnter(date) {
      this.currentDate = date
      this.active = true
    },
    onLeave() {
      this.active = false
    },
    deleteItem(date) {
      this.$store.commit('DELETE_LIST', date)
    },
    replaceSrc(e) {
      e.target.src = '404.jpeg'
    }
  },

  watch: {
    sorting(sorting) {
      this.$store.commit('SORTING_LIST', sorting)
    }
  }
}
</script>
