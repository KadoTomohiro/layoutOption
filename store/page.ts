import { LayoutOption } from '~/types/customOptions'

export const state = (): LayoutOption => ({
  title: '',
  hasConfirm: false,
})

export const mutations = {
  setLayoutOption(state: LayoutOption, paylod: LayoutOption) {
    state.title = paylod.title
    state.hasConfirm = paylod.hasConfirm
  },
}
