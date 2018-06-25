<template>
	<div>
		<Header></Header>
			<div class="faucet">
				<h3>Faucet</h3>
				<p class="title">Address in TestNet</p>
				<input type="text" name="">
				<p class="tips">一个地址只能领取一次</p>
				<button>Get 10 Seeles</button>
			</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import Footer from './footer'
	import Header from './header'

	export default {
		components:{
			Header,
			Footer
		},
		methods:{
		}
	}
</script>
<style lang="less">
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