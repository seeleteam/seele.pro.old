<template>
	<div>
		<Header></Header>
			<div class="faucet">
				<h3>{{$t('develop.faucet')}}</h3>
				<p class="title">{{$t('develop.AT')}}</p>
				<input type="text" name="" v-model="address">
				<p class="tips">{{$t('develop.OA')}}</p>
				<el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading"  @click="doGetSeele">{{$t('develop.GS')}}</el-button>
			</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import Footer from './footer'
	import Header from './header'
	import { Message, Loading} from 'element-ui'

	export default {
		data:function(){
			return {
				address:"",
				fullscreenLoading:false
			}
		},
		components:{
			Header,
			Footer
		},
		methods:{
			
			doGetSeele(){
				if(!this.address){
					Message.error(this.$t('develop.address'))
					return
				}

				let _this = this
				this.fullscreenLoading = true
				this.$ajax.get('https://faucet.niren.org/seele/faucet/'+this.address ,{ headers: {"Content-Type": "application/x-www-form-urlencoded"},emulateJSON: true }).then(res=>{
					if(res.data.succeed){
						_this.$notify.success({
							title: _this.$t('develop.success'),
							message: _this.$t('develop.reward')
						});
					}else{
						_this.$notify.error({
							title:_this.$t('develop.failed'),
							message:res.data.data
						})
					}

				}).catch(function(error){
					_this.$notify.error({
						title:_this.$t('develop.failed'),
						message:_this.$t('develop.failed'),
					})
				}).finally(function(){
					_this.fullscreenLoading = false
				})
			}
		}
	}
</script>
<style lang="less">
	.faucet{
		height: 600px;
		font-family:AvenirLT-Heavy;
		@media (max-width: 900px){
				height: 24.38rem;
		}
		h3{
			font-size: 32px;
			color: #202020;
			text-align: center;
			margin-top: 117px;
			@media (max-width: 900px)  {
				  margin-top: 2.78rem;
				  font-size: 1.13rem;
			}  
		}
		p.title{
			font-size: 18px;
			color: #333;
			font-family:AvenirLT-Roman;
			text-align: center;
			margin-top: 120px;
			@media (max-width: 900px){
				font-size: .94rem;
				margin-top: 3.47rem;
			}
		}
		input{
			width: 580px;
			height: 70px;
			display: block;
			margin: 30px auto 0 auto;
			padding:1.2rem;
			font-size: 1.4rem;
			box-sizing: border-box;
			border-radius: 5px;
			outline: none;
			border: solid 1px #d3d3d3;
			transition: all .5s ease-in-out;
			@media (max-width: 900px){
				// width: 36rem;
				// height: 5rem;
				font-size: 1rem;
				width: 18.13rem;
				height: 2.5rem;
				margin-top: .94rem;
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
			@media (max-width: 900px){
				font-size: .88rem;
				margin-top: .88rem;
			}
		}
		.el-button{
			margin: 0 auto;
			margin-top: 100px;
			display: block;
			@media (max-width: 900px){
				margin-top: 2.25rem;
			}

		}

	}

</style>