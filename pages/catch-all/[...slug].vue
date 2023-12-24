<template>
    <div class="bg-white py-24">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl text-gray-800">這是 catch-all/... 下的頁面</h1>
        <p class="mt-8 text-3xl text-gray-600">匹配到的 Params:</p>
        <p class="my-4 text-5xl font-semibold text-violet-500">{{ $route.params.slug }}</p>
        <span class="text-xl text-gray-400">每個陣列元素對應一個層級</span>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'YourComponent',
  props: {
    yourProp: String, // 這裡替換成你的實際 prop 定義
  },
  setup(props) {
    // 使用 useRoute 來獲取 $route
    const route = useRoute();

    // 使用 toRefs 解構 props
    const { yourProp } = toRefs(props);

    return {
      route,
      yourProp,
    };
  },
});
</script>

