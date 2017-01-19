<template>
  <div class="editor-view">
    <div>
      <label>Text: </label>
      <input v-model="input.text" placeholder="Text">
    </div>
    <div>
      <label>Date: </label>
      <input type="date" v-model="input.date">
    </div>
    <div>
      <label>Tags: </label>
      <input v-model="input.tags" placeholder="Use space as a delimiter">
    </div>
    <div>
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        text: '',
        date: '',
        tags: ''
      }
    }
  },
  computed: {
    tagsArr() {
      // input.tags の文字列を空白で区切って配列に変換する
      return this.input.tags.trim() !== '' ? this.input.tags.trim().split(/\s+/) : []
    }
  },
  methods: {
    save() {
      // this.input のクローンを生成する
      const data = Object.assign({}, this.input, {tags: this.tagsArr})
      // 'add'イベントを自身にトリガーする
      this.$emit('add', data)
    }
  }
}
</script>
