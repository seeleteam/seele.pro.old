<template>
	<div>
		<Header></Header>
			<div class="faucet">
				<h3>{{$t('develop.faucet')}}</h3>
				<p class="title">{{$t('develop.AT')}}</p>
				<input type="text" name="" v-model="address">
				<p class="tips">{{$t('develop.OA')}}</p>
				<button @click="doGetSeele">{{$t('develop.GS')}}</button>
			</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import Footer from './footer'
	import Header from './header'

	export default {
		data:function(){
			return {
				address:""
			}
		},
		components:{
			Header,
			Footer
		},
		methods:{
			
			doGetSeele(){
				let obj = {to:this.address}
				this.$ajax.post('http://106.75.10.236:2683/faucet/send',obj,{ headers: {"Content-Type": "application/x-www-form-urlencoded"},emulateJSON: true }).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>
<style lang="less">
	@media screen and (max-width:768px){html,body{font-size:20px !important}}
	@media screen and (max-width:380px){html,body{font-size:10px !important}}
	.faucet{
		height: 800px;
		font-family:AvenirLT-Heavy;
		@media (max-width: 768px){
				height: 39rem;
		}
		h3{
			font-size: 32px;
			color: #202020;
			text-align: center;
			margin-top: 117px;
			@media (max-width: 768px)  {
				  margin-top: 4.45rem;
				  font-size: 1.8rem;
			}  
		}
		p.title{
			font-size: 18px;
			color: #333;
			font-family:AvenirLT-Roman;
			text-align: center;
			margin-top: 120px;
			@media (max-width: 768px){
				font-size: 1.5rem;
				margin-top: 5.55rem;
			}
		}
		input{
			width: 580px;
			height: 70px;
			display: block;
			margin: 30px auto 0 auto;
			padding:1.2rem;
			font-size: 1.5rem;
			box-sizing: border-box;
			border-radius: 5px;
			outline: none;
			border: solid 1px #d3d3d3;
			transition: all .5s ease-in-out;
			@media (max-width: 768px){
				// width: 36rem;
				// height: 5rem;
				width: 29rem;
				height: 4rem;
				margin-top: 2rem;
			}
		}
		input:focus{
			border-color: #1346A2;
		}
		p.tips{
			color: #999;
			font-size: 14px;
			margin-top: 26px;
			text-align: center;
			@media (max-width: 768px){
				font-size: 1.4rem;
				margin-top: 1.4rem;
			}
		}
		button{
			width: 160px;
			height: 50px;
			margin: 62px auto 0 auto;
			display: block;
			background-color: #1346A2;
			border-radius: 5px;
			border:0;

			font-size: 16px;
			font-weight: bold;
			color: white;
			font-family:AvenirLT-Heavy;
			cursor: pointer;
			&:hover{
				opacity: .8
			}
			&:active{
				opacity: .6
			};
			@media (max-width: 768px){
			    width: 12.5rem;
			    height: 4rem;
			    font-size: 1.5rem;
			    margin-top: 3.6rem;
			}
		}

	}

</style>