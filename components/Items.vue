<template>
  <div class="visible">
    <div class="sortWrap">
      <select class=" sort">
        <option value="default">По умолчанию</option>
        <option value="date">По дате</option>
      </select>
    </div>
      <div class="cards">
        <div class="card" v-for="list in $store.state.lists">
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
export default {}
</script>
