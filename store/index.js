export const state = () => ({

  lists: [
    {
      name: '1',
      description: 'hesus',
      href: 'https://avatars.mds.yandex.net/i?id=e0f17662b380e6a16cdecf62331e0786_l-3753631-images-thumbs&n=13',
      price: '599',
      date: 1
    },
    {
      name: '2',
      description: 'hesus',
      href: 'https://avatars.mds.yandex.net/i?id=e0f17662b380e6a16cdecf62331e0786_l-3753631-images-thumbs&n=13',
      price: '699',
      date: 64542
    },
    {
      name: '3',
      description: 'hesus',
      href: 'https://avatars.mds.yandex.net/i?id=e0f17662b380e6a16cdecf62331e0786_l-3753631-images-thumbs&n=13',
      price: '799',
      date: 12331231
    },
    {
      name: '4',
      description: 'hesus',
      href: 'https://avatars.mds.yandex.net/i?id=e0f17662b380e6a16cdecf62331e0786_l-3753631-images-thumbs&n=13',
      price: '899',
      date: 234423
    },
    {
      name: '5',
      description: 'hesus',
      href: 'https://avatars.mds.yandex.net/i?id=e0f17662b380e6a16cdecf62331e0786_l-3753631-images-thumbs&n=13',
      price: '999',
      date: 412312
    },


  ]
})

export const mutations = {
  ADD_LIST(state, list) {
    state.lists = [...state.lists, list]
  },
  DELETE_LIST(state, date) {
    state.lists.splice(state.lists.map(el => el.date).indexOf(date), 1)
  },
  SORTING_LIST(state, type) {
    switch (type) {
      case 'default': state.lists.sort((a,b) => a.date - b.date)
        break;
      case 'priceMin': state.lists.sort((a,b) => a.price - b.price)
        break;
      case 'priceMax': state.lists.sort((a,b) => b.price - a.price)
    }

  }


}
