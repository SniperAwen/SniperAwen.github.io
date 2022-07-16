# 个人分享

## .prettierrc.js

```JavaScript
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
};
```

## vue 代码块

```json
{
  "vue2Scss": {
    "prefix": "v2s",
    "body": [
      "<template>",
      "  <div class='$1'>",
      "    <div class='container'>$1</div>",
      "  </div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  name:'$1',",
      "  components:{},",
      "  props:{},",
      "  data () {",
      "    return {}",
      "  },",
      "  computed:{},",
      "  watch:{},",
      "  methods:{},",
      "  created(){},",
      "  mounted(){},",
      "  beforeDestroy(){}",
      "}",
      "</script>",
      "",
      "<style lang='scss' scoped>",
      ".$1{",
      "  .container{",
      "  }",
      "}",
      "</style>"
    ],
    "description": "vue2Sass"
  },
  "vue2Less": {
    "prefix": "v2l",
    "body": [
      "<template>",
      "  <div class='$1'>",
      "    <div class='container'>$1</div>",
      "  </div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  name:'$1',",
      "  components:{},",
      "  props:{},",
      "  data () {",
      "    return {}",
      "  },",
      "  computed:{},",
      "  watch:{},",
      "  methods:{},",
      "  created(){},",
      "  mounted(){},",
      "  beforeDestroy(){}",
      "}",
      "</script>",
      "",
      "<style lang='less' scoped>",
      ".$1{",
      "  .container{",
      "  }",
      "}",
      "</style>"
    ],
    "description": "vue2Less"
  },
  "uni2Scss": {
    "prefix": "uni2s",
    "body": [
      "<template>",
      "  <view class='$1'>",
      "    <view class='container'>$1</view>",
      "  </view>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  name:'$1',",
      "  components:{},",
      "  props:{},",
      "  data () {",
      "    return {}",
      "  },",
      "  computed:{},",
      "  watch:{},",
      "  methods:{},",
      "  onLoad(){},",
      "  onShow(){},",
      "  onReady(){},",
      "  onHide(){},",
      "  onUnload(){}",
      "}",
      "</script>",
      "",
      "<style lang='scss' scoped>",
      ".$1{",
      "  .container{",
      "  }",
      "}",
      "</style>"
    ],
    "description": "uni2Scss"
  },
  "vue3Scss": {
    "prefix": "v3s",
    "body": [
      "<template>",
      "<div class='$1'>",
      "  <div class='container'>$1</div>",
      "</div>",
      "</template>",
      "",
      "<script lang='ts'>",
      "export default {",
      "name: '$1-page',",
      "};",
      "</script>",
      "<script setup lang='ts'>",
      "// https://www.ylawen.com/docs/#/./Vue/Vue?id=components-api",
      "// import { useStore } from 'pinia'",
      "import { useRoute, useRouter } from 'vue-router';",
      "import { ref, reactive } from 'vue'",
      "const _route = useRoute();",
      "const _router = useRouter();",
      "",
      "</script>",
      "",
      "<style lang='scss' scoped>",
      ".container{",
      "}",
      "</style>"
    ],
    "description": "vue3Scss"
  },
  "vue3Components": {
    "prefix": "v3sc",
    "body": [
      "<template>",
      "  <div class='$1'>$1</div>",
      "</template>",
      "",
      "<script lang='ts'>",
      "export default {",
      "name: '$1-component',",
      "};",
      "</script>",
      "<script setup lang='ts'>",
      "// https://www.ylawen.com/docs/#/./Vue/Vue?id=components-api",
      "const props=defineProps({})",
      "",
      "</script>",
      "",
      "<style lang='scss' scoped>",
      ".$1 {",
      "}",
      "</style>"
    ],
    "description": "vue3Components"
  }
}
```
