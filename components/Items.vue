<template>
  <div class="visible">
    <div class="sortWrap">
      <select class=" sort">
        <option value="default">По умолчанию</option>
        <option value="date">По дате</option>
      </select>
    </div>
      <div class="cards" >
        <div class="card" v-for="(list,idx) in $store.state.lists" @mouseenter="onEnter(list.date)" @mouseleave="onLeave" :key="list.date">
            <div class="trash" :hidden="!active || list.date !==currentDate" @click="deleteItem(list.date)">
              <img src="~static/trash.png" alt="trash">
            </div>
         <div class="imageWrap">
           <img class="image"
                :src="list.href"
                alt="image">
         </div>
          <div class="data">
            <div class="title">{{ list.name }}</div>
            <div class="description">{{ list.description }}
            </div>
            <div class="price">{{ list.price }} руб.</div>
          </div>
        </div>




      </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      currentDate: false,
      active:false,
    }
  },
  methods: {
    onEnter(date) {
      this.currentDate = date
      this.active = true
    } ,
    onLeave() {
      this.active = false
    },
    deleteItem (date) {
      this.$store.commit('DELETE_LIST', date)
    }
  }
}
</script>
