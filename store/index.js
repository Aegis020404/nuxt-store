export const state = () => ({
  lists: []
})

export const mutations = {
  ADD_LIST(state,list) {
    state.lists = [...state.lists , list ]
  },
  DELETE_LIST(state,list) {
    state.lists.splice(state.lists.indexOf(list),1)
  }

}
