import { LayoutOption } from '~/types/customOptions'

export default function (option: LayoutOption) {
  return {
    created() {
      ;(this as any).$store.commit('page/setLayoutOption', option)
    },
  }
}
