import Vue from 'vue'

export function setPaginationMutation (state, { group, pagination }) {
  if (group === null) {
    state.currentPage = pagination.current_page
    state.totalPages = pagination.total_pages

    return
  }

  Vue.set(state.groups[group], 'currentPage', pagination.current_page)
  Vue.set(state.groups[group], 'totalPages', pagination.total_pages)
}
