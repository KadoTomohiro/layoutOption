import { LayoutOption } from '~/types/customOptions'

function defaultLayoutOption(): LayoutOption {
  return {
    title: '',
    hasConfirm: false,
  }
}

// Layoutが複数あってオプションが濃っとなる場合、stateに複数のオプションを持たせる。初期化字は全て初期化
export const state = (): LayoutOption => defaultLayoutOption()

export const mutations = {
  initialize(state: LayoutOption) {
    Object.assign(state, defaultLayoutOption())
  },
  setLayoutOption(state: LayoutOption, payload: LayoutOption) {
    Object.assign(state, payload)
  },
}
