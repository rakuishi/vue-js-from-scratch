const state = {
  memos: []
}

const util = {
  // memos の中から id が一致するメモの index を返す
  findIndex(memos, id) {
    const targetId = parseInt(id, 10)
    // 該当する id を持つ要素の index を取得する
    return memos.findIndex((memo) => {
      return memo.id === id
    })
  }
}

const debug = process.env.NODE_ENV !== 'production'

const actions = {
  addMemo(newMemo) {
    debug && console.log(`addMemo triggered with`, newMemo)
    newMemo.id = state.memos.reduce((id, memo) => {
        return id < memo.id ? memo.id : id
      }, 0) + 1
      state.memos.push(newMemo)
  },
  removeMemo(id) {
    debug && console.log(`removeMemo triggered with`, id)
    const index = util.findIndex(state.memos, id)
    state.memos.splice(index, 1)
  },
  updateMemo(memo) {
    debug && console.log(`updateMemo triggered with`, memo)
    const index = util.findIndex(state.memos, memo.id)
    state.memos.splice(index, 1, memo)
  }
}

export default {
  state,
  actions
}
