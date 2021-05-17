import { LayoutOption } from '~/types/customOptions'

// Layoutが複数あってオプションが異なる場合mixinを複数に分ける
export default function (option: LayoutOption) {
  return {
    created() {
      ;(this as any).$store.commit('page/setLayoutOption', option)
    },
  }
}
