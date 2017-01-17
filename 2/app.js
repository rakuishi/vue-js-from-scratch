const vm = new Vue({
  el: '#app',
  template: 
  `
    <div>
      <input v-model="message">
      <button @click="increment">increment</button>
      <div v-if="count % 2 !== 0" v-bind:style="styleObject">
        {{messageAndCount}}
      </div>
      <div v-else>
        This element can be shown when the count is an even.
      </div>
      <div>
        colors:
        <span v-for="color in colors" :style="{color}">{{color}}</span>
      </div>
      <div>
        users:
        <div v-for="user in users">
          <span v-for="(value, key) in user">
            {{key}}: {{value}}
          </span>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      message: 'Hello Vue.js!',
      count: 0,
      colors: ['red', 'blue', 'green'],
      users: [
        {id: 1, name: 'User 1'},
        {id: 2, name: 'User 2'}
      ]
    }
  },
  methods: {
    increment() {
      this.count += 1
    }
  },
  computed: {
    messageAndCount() {
      return `${this.message}: ${this.count}`
    },
    styleObject() {
      return {
        color: this.count % 3 !== 0 ? 'red' : 'blue',
        fontSize: '16px'
      }
    }
  }
})
