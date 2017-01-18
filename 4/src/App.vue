<template>
  <div id="app">
    <editor-view @add="add"></editor-view>
    <list-view :memos="memos" @remove="remove"></list-item>
  </div>
</template>

<script>
import EditorView from './components/EditorView'
import ListView from './components/ListView'

export default {
  name: 'app',
  data() {
    return {
      memos: [
        {
          id: 1,
          text: 'テスト',
          date: '16-10-28',
          tags: ['タグ1', 'タグ2']
        },
        {
          id: 2,
          text: 'テスト2',
          date: '16-11-28',
          tags: ['タグ2', 'タグ3']
        }
      ]
    }
  },
  computed: {
    nextId() {
      // this.memos の中で一番大きい id + 1 を返す
      return this.memos.reduce((id, memo) => {
          return id < memo.id ? memo.id : id
        }, 0) + 1
    }
  },
  methods: {
    add(newMemo) {
      newMemo.id = this.nextId
      this.memos.push(newMemo)
    },
    remove(id) {
      // 該当する id を持つ要素の index を取得する
      const index = this.memos.findIndex((memo) => {
        return memo.id === id
      })
      // this.memos から index にある要素を削除する
      this.memos.splice(index, 1)
    }
  },
  components: {
    EditorView, ListView
  }
}
</script>
