<template>
	<div>
		<Header></Header>
			<div class="developers">
				<div class="developers-head">
					<h3>{{$t('develop.developers')}}</h3>
				</div>
				<div class="developers-doc">
					<h3>{{$t('develop.doc')}}</h3>
					<div class="heading">
						<div class="line"></div>
						<div class="content" @click="open('https://github.com/seeleteam/go-seele/wiki/Getting-Started-With-Seele')">{{$t('develop.start')}}</div>
						<div class="line"></div>
						<div class="content"></div>
						<div class="line"></div>
						<div class="content" @click="open('https://github.com/seeleteam/go-seele/wiki/API-Document')">{{$t('develop.API')}}</div>
						<div class="line"></div>
					</div>
				</div>
				<div class="developers-tools">
					<h3>{{$t('develop.tools')}}</h3>
					<ul class="icon-list">
						<li class="line"></li>
						<li class="box box-1" @click="open('http://seelemonitor.net/')"><i class="icon iconfont">&#xe6d3;</i><span>{{$t('develop.monitor')}}</span></li>
						<li class="line"></li>
						<li class="box box-2" @click="open('http://seelescan.net/')"><i class="icon iconfont">&#xe684;</i><span>{{$t('develop.explore')}}</span></li>
						<li class="line"></li>
						<li class="box box-3" @click="open('https://seele.pro/faucet')"><i class="icon iconfont">&#xe60d;</i><span>{{$t('develop.faucet')}}</span></li>
						<li class="line"></li>
						<li class="box box-4" @click="open('http://web-wallet.seele.pro/')"><i class="icon iconfont">&#xe98c;</i><span>{{$t('develop.wallet')}}</span></li>
						<li class="line"></li>
					</ul>
				</div>
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
			toFaucet:function(){
				this.$router.push('/faucet')
			},
			open(url){
				window.open(url)
			}
		},
	}
</script>
<style lang="less">
	@media screen and (max-width:900px){html,body{font-size:10px !important}}
	@font-face {
	  font-family: 'iconfont';
	  src: url('../assets/iconfont/developers/iconfont.eot');
	  src: url('../assets/iconfont/developers/iconfont.eot?#iefix') format('embedded-opentype'),
	  url('../assets/iconfont/developers/iconfont.woff') format('woff'),
	  url('../assets/iconfont/developers/iconfont.ttf') format('truetype'),
	  url('../assets/iconfont/developers/iconfont.svg#iconfont') format('svg');
	}
	.iconfont{
	  font-family:"iconfont" !important;
	  font-size:16px;font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -webkit-text-stroke-width: 0.2px;
	  -moz-osx-font-smoothing: grayscale;
	}
	.developers{
		// height:1070px;
		font-family: AvenirLT-Heavy;
		.developers-head{
			height: 270px;
			background-size: 100% 100%;
			background-repeat: no-repeat;
			background-position: center;
			background-image: url(../assets/imgs/developers/banner.jpg);
			@media (max-width: 900px) {
				height: 10rem;
			}
			h3{
				font-size: 36px;
				text-align: center;
				line-height: 270px;
				color: #E4EEFF;
				font-weight: normal;
			}
			@media (max-width: 900px) {
				height: 10rem;
				h3{
					line-height: 10rem;
					font-size: 1.8rem
				}
			}
		}
		.developers-doc{
			overflow-y: hidden;
			height: 357px;
			background-size: 100% 100%;
			background-image: url('../assets/imgs/developers/tbg.jpg');
			@media (max-width: 900px){
				height: 24.9rem;
				position: relative;
			}
			h3{

				color:#202020;
				font-size: 32px;
				margin-top: 106px;
				text-align: center;
				@media (max-width: 900px){
					margin-top: 3.85rem;
					font-size: 1.8rem;
				}
			}
			.heading{
				width: 1154px;
				height: 30px;
				margin: 100px auto 0 auto;
				overflow-y: hidden;
				display: flex;
				justify-content: space-between;
				align-items: center;
				@media (max-width: 900px){
					width: calc(100% - 3rem);
					display: block;
					height: 19.7rem;
					margin-top: 10px;
				}
				div.line{
					height: 17px;
					width: 1px;
					background-color: #e8e8e8;
					@media (max-width: 768px){
						display: none
					}
				}
				div.content{
					// width: 40px;
					height: 22px;
					font-size: 16px;
					font-weight: bold;
					color: #333;
					transition: all .25s ease-in-out;
					cursor: pointer;
					&:hover{
						transform: scale(1.25);
						color: #1346A2;
					}
					@media (max-width: 900px){
						text-align: center;
						width: 100%;
						height: 6.05rem;
						line-height: 6.05rem;
						font-size: 1.7rem;
						font-weight: normal;
						&:nth-child(4){
							border-width: 1px 0;
							border-style: solid;
							border-color: rgba(51,51,51,.1);
						}
					}
				}
			}
		}
		.developers-tools{
			height: 442px;
			overflow-y: hidden;
			@media (max-width: 900px){
				height: 35.7rem;
			}

			h3{

				color:#202020;
				font-size: 32px;
				margin-top: 83px;
				text-align: center;
				@media (max-width: 900px){
					margin-top: 5.15rem;
					font-size: 1.8rem;
				}
			}
			ul.icon-list{
				list-style-type:none;
				margin: 84px auto 0 auto;
				padding: 0; 
				width: 900px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 111px;
				@media (max-width: 900px) {
					width: 100%;
					justify-content: center;
					align-content: flex-start;
					flex-wrap: wrap;
					margin-top: 3.1rem
				}
				li.line{
					width: 1px;
					height: 46px;
					background-color: #e8e8e8;
					@media (max-width: 900px) {
						display: none
					}
				}
				li.box{
					width: 70px;
					height: 70px;
					display: flex;
					position: relative;
					justify-content: center;
					align-items: center;
					@media (max-width: 900px) {
						
						width: 17.25rem;
						height: 10rem;
					    border: solid 1px #e3e3e3;
					    border-collapse: collapse;
					    align-items: flex-start;
					}
					i{
						display: inline-block;
						width: 50px;
						height: 50px;
						line-height: 50px;
						font-size: 50px;
						color: #989898;
						transition: all .25s ease-in-out;
						cursor: pointer;
						user-select: none;
						&:hover{
							transform: scale(1.36);
							color: #1346A2
						}
						@media (max-width: 900px) {
							width: 3rem;
							height: 3rem;
							font-size: 3rem;
							line-height: 3rem;
							margin-top: 2.4rem;
						}

					}
					span{
						position: absolute;
						color:#202020;
						font-size: 1.125rem;
						font-weight: bold;
						bottom: -40px;
						@media (max-width: 900px){
							bottom: 2rem;
							font-weight: normal;
						}
					}
				}
				li.box::after{
					position: absolute;
					color:#202020;
					font-size: 1.125rem;
					font-weight: bold;
					bottom: -40px;
					@media (max-width: 900px){
						bottom: 2rem;
						font-weight: normal;
					}
				}
				li.box-1{
					margin: 0 -1px -1px 0;
				}
				li.box-4{
					margin: -1px 0 0 -1px
				}
				li.box-3{
					margin-top: -1px
				}

			}
		}
	}
	@media screen and (max-width: 900px){
		.developers{
			.developers-head{
				background-image: url(../assets/imgs/developers/mbanner.jpg);
			}
		}
	}
</style>