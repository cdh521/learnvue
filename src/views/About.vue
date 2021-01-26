<template>
	<div class="about">
		<h1>This is an about page</h1>
		<button @click="reduce">-</button>
		<span>{{num}}</span>
		<button @click="add">+</button>
		<p>{{normal()}}</p>
		<p>{{computed1}}</p>
		
	</div>
</template>
<script>
	export default {
		data() {
			return {
				num:10
			}
		},
		methods: {
			normal(){
				console.log("普通方法执行了");
				return "ppp"
			},
			reduce() {
				this.num--;
			},
			add() {
				this.num++;
			}
		},
		computed:{
			computed1(){
				console.log("方法执行了");
				return "事件检测"+this.num
			}
		},
		watch:{
			watch1(){
				console.log("事件检测"+this.num)
			}
		}
	}
</script>
