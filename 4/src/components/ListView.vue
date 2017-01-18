<template>
  <div class="list-view">
    <div v-if="hasMemo">
      <list-item
        v-for="memo in memos"
        :memo="memo"
        @remove="remove">
      </list-item>
    </div>
    <div v-else>
      There is no memo.
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  props: {
    memos: Array
  },
  computed: {
    hasMemo() {
      return this.memos && this.memos.length !== 0
    }
  },
  methods: {
    remove(id) {
      this.$emit('remove', id)
    }
  },
  components: {
    ListItem
  }
}
</script>
