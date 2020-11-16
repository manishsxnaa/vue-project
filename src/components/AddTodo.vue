<template>
    <div>
        <form @submit.prevent="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add Todo..">
            <input type="Submit" value="Submit" class="btn">
        </form>
    </div>
</template>
<script>
//import  { uuid } from "vue-uuid";

export default {
    name: "AddTodo",
    data () {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e){
            e.preventDefault();
            const newTodo = {
                //id: uuid.v1(),
                title: this.title,
                completed: false
            }
            // Send up to parent
            this.$emit('add-todo',newTodo);
            this.title = '';
        }
    }
}
</script>
<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 5px;
    }
    input[type="submit"] {
        flex: 2;
    }
</style>