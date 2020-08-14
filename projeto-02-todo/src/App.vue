<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress"/>
		<NewTask @taskAdded="addTask"/>
		<TaskGrid 
			@state-change="toggleTaskState" 
			@task-deleted="deleteTesk" 
			:tasks="tasks"
		/>
	</div>
</template>

<script>
import TasksProgress from './components/TasksProgress.vue'
import NewTask from './components/NewTask.vue'
import TaskGrid from './components/TaskGrid.vue'
export default {
	components: { TasksProgress, NewTask, TaskGrid }, 
	data() { 
		return {
			tasks: []
		}
	},
	methods: {
		addTask (task) {
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0
			if (reallyNew){ 
				this.tasks.push({
					name: task.name,  
					pending: task.pending || true 
				})
			}
		},
		deleteTesk(i) {
			this.tasks.splice(i,1)
		}, 
		toggleTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending 
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		tasks: {
			deep: true, 
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	created() {
		const json = localStorage.getItem('tasks')
		const array = JSON.parse(json)
		this.tasks = Array.isArray(array) ? array : []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
