Vue.component('list-view', {
  template: 
  `
    <div class="list-view">
      <div v-if="memos && memos.length !== 0">
        <list-item
          v-for="memo in memos"
          :memo="memo">
        </list-item>
      </div>
      <div v-else>
        There is no memo.
      </div>
    </div>
  `,
  props: {
    memos: Array
  }
})
