<template>
  <div class="foo">
    <input v-model="newTodoText" @keyup.enter="addNewTodo" placeholder="Add a todo">
    <ul>
      <li v-for="todo in todos" :key="todo.id" >
        {{ todo.title }}
        <button @click="removeTodo($index)">X</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    }
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.foo{width:100%;height:auto;background: blue;color:#fff;}
li{border: 1px solid #ccc; height: 30px;line-height: 30px; color: red}
</style>