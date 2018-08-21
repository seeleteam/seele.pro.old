<template>
    <div class="research">
        <Header/>
        <Research/>
        <div class="roadmap">
            <h3>{{$t('research.roadmap')}}</h3>
            <div class="line">
                <div class="ratio" :style='{"width": ratio+ "px"}'></div>
            </div>
            <ul ref="map">
                <li v-for="(step, index) in steps" :key="index">
                    <i  :class='{"notfinished":step.status!==true}'></i>
                    <p class="date">{{$t(step.date)}}</p>
                    <p class="event" v-html="$t(step.event)"></p>
                </li> 
            </ul>
        </div>
        <div class="whitepaper">
            <h3>{{$t('research.whitepaper')}}</h3>
            <button @click="openWhitePaper">PDF</button>
        </div>
        <div class="yellowpaper">
            <h3>{{$t('research.yellowpaper')}}</h3>
            <p><span>{{$t('research.more')}}</span><i></i></p>
            <ul>
                <li v-for="(item, index) in yellowpaper"  @click="openYellowPaper(item.url)" :key="index">
                    <h3>{{$t(item.title)}}</h3>
                    <template v-if='typeof item.content !== "string"' >
                        <div  v-for="(sub, index) in item.content" :key="index">
                            <p class="title">{{$t(sub.name)}}:&nbsp;&nbsp;</p>
                            <p class="content"> {{$t(sub.content)}}</p>
                        </div>
                    </template>
                    <template v-else>
                        <p>{{$t(item.content)}}</p>
                    </template>
                </li>
            </ul>
            <button @click="openNews">{{$t('research.latest')}}</button>
        </div>
        <Footer/>
    </div>

</template>
<script>
import Header from "./header"
import Footer from "./footer"
import Research from "./itemBanner/research"
import Banner from "./home/banner"
export default {
    data:function(){
        return {
            ratio:0,
            steps:[{
                date:"research.dstep1",
                event:"research.step1",
                status:true
            },{
                date:"research.dstep2",
                event:"research.step2",
                status:true
            },{
                date:"research.dstep3",
                event:"research.step3",
                status:true
            },{
                date:"research.dstep4",
                event:"research.step4",
                status:false
            }],
            stepIndex:2,
            yellowpaper:[{
                title:"research.cryptography.title",
                url:"header.ypaper",
                content:[{
                    name:"research.cryptography.content[0].name",
                    content:"research.cryptography.content[0].content",
                },{
                    name:"research.cryptography.content[1].name",
                    content:"research.cryptography.content[1].content"
                }]
            },{
                title:"research.network",
                content:"research.dstep4"
            },{
                title:"research.consensus",
                content:"research.dstep4"
            },{
                title:"research.distributed",
                content:"research.dstep4"
            }]
        }
    },
    methods:{
        openWhitePaper(){
            let url = this.$t('header.paper')
            window.open(url, '_self')
        },
        openYellowPaper(url){
            if(url){
                window.open(this.$t(url))
            }
        },
        openNews(){
            this.$router.push({name:"news"})
        }
    },
    computed:{
        lang(){
            return this.$i18n.locale === 'en'?'en_US':'zh_CN'
        }
    },
    watch:{
        lang(val){
            setTimeout(
                () => {
                    window.onresize()
                },0
            )
            
        }
    },
    mounted(){
        this.ratio = this.$refs.map.children[this.stepIndex].offsetLeft + this.$refs.map.children[this.stepIndex].offsetWidth/2 + this.$refs.map.offsetLeft
        window.onresize = () => {
            this.ratio = this.$refs.map.children[this.stepIndex].offsetLeft + this.$refs.map.children[this.stepIndex].offsetWidth/2 + this.$refs.map.offsetLeft
        }
    },
    // computed:{
    //     ratioLen(){
    //         if(this.$refs.map)
    //             return 
    //         else
    //             return 0
    //     }
    // },
    components:{
        Header,
        Footer,
        Research,
        Banner
    }
}
</script>
<style lang="less" scoped>
    @media screen and (min-width: 800px) {
        .pc{
            display: block
        }
        .mobile{
            display: none
        }
    }
    @media screen and (max-width: 800px){
        .pc{
            display: none;
        }
        .mobile{
            display: block;
        }
    }

    .research{
        font-family: 'Helvetica';
    }
    .roadmap{
        height: 420px;
        position: relative;
        @media screen and (max-width:900px){
            height: 14.16rem;

        }
        & > h3{
            color:#333;
            font-size: 30px;
            text-align: center;
            position: absolute;
            top:80px;
            font-weight: normal;
            width: 100%;
            @media screen and (max-width:900px){
                top: 2.5rem;
                font-size: 1.13rem;
            }
        }
        .line{
            width: 100%;
            height: 2px;
            background-color: #DCDCDC;

            position: absolute;
            top:230px;

            .ratio{
                background-color: #22479C;
                height: 100%;
            }
            @media screen and (max-width:900px){
                top:7.94rem;
            }
        }
        ul{
            position: absolute;
            width: 1160px;
            margin:0 auto;
            left: 0;
            right: 0;
            top:180px;

            display: flex;
            justify-content: space-around;

            @media screen and (max-width:900px){
                top: 6rem;
                width: 100%;
            }
            li{
                position: relative;
                i{
                    position: absolute;
                    width: 100%;
                    height: 20px;
                    border-radius: 50%;
                    
                    left: 0;
                    right: 0;
                    top:40px;
                    text-align: center;
                    @media screen and (max-width:900px){
                        top: 1.4rem;
                    }
                    &::before{
                        content: "";
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        background-image: url(../assets/imgs/research/blue.png)
                    }
                    &.notfinished::before{
                        background-image: url(../assets/imgs/research/gray.png)
                    }
                }
                p{
                    text-align: center;
                }
                .date{
                    color:#333;
                    font-size:20px;
                    @media screen and (max-width:900px){
                        font-size: .88rem;
                    }
                }
                .event{
                    margin-top: 60px;
                    color:#333;
                    font-size: 14px;
                    line-height: 26px;
                    @media screen and (max-width:900px){
                        font-size: .75rem;
                        margin-top: 2.63rem;
                    }
                }
            }
        }
    }

    .whitepaper{
        position: relative;
        width: 100%;
        height: 320px;
        background-color: #EFF3F5;
        overflow: hidden;
        background-image: url(../assets/imgs/research/whitepaperbg.png);
        @media screen and (max-width:900px){
            height: 12.5rem;
        }
        h3{
            text-align: center;
            color:#333;
            font-size: 30px;
            font-weight: normal;
            margin-top: 80px;
            @media screen and (max-width:900px){
                font-size: 1.13rem;
                margin-top: 2.5rem;
            }
        }
        button{
            display: block;
            width: 200px;
            height: 48px;
            background-color: #22479C;
            border-radius: 4px;
            
            font-size: 18px;
            color:white;
            margin:85px auto 0 auto;
            cursor: pointer;

            @media screen and (max-width:900px){
                width: 8.75rem;
                height: 1.88rem;
                font-size: .88rem;
                margin-top: 3.75rem;
            }
        }

    }
    .yellowpaper{
        position: relative;
        width: 100%;
        height: 928px;
        overflow: hidden;
        @media screen and (max-width:900px){
            height: 21.16rem;
        }
        h3{
            text-align: center;
            color:#333;
            font-size: 30px;
            font-weight: normal;
            margin-top: 80px;
            @media screen and (max-width:900px){
                font-size: 1.13rem;
                margin-top: 2.5rem;
            }
        }
        & > p{
            font-size: 14px;
            color:#666;
            text-align: right;
            width: 1160px;
            margin:50px auto 0;
            position: relative;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            span{
                margin-right: 9px;
            }
            i{
                width: 8px;
                height: 14px;
                right: 0;
                background-image: url(../assets/imgs/research/more.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
                
            }
            @media screen and (max-width: 900px){
                margin-top: 1rem;
                width: 100%;
                font-size: .69rem;
                i{
                    width: .38rem;
                    height: .68rem;
                }
                padding: 0 5px;
                box-sizing: border-box;
            }
        }
        ul{
            margin:18px auto 0 auto;
            height:492px;
            width: 1160px;
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            flex-wrap: wrap;
            @media screen and (max-width:900px){
                margin-top: .9rem;
                width: 100%;
                height: 12.81rem;
                justify-content: space-around;
            }
            li{
                background-color: #F9F9F9;
                width: 570px;
                height: 236px;
                text-align: center;
                padding:0  40px;
                box-sizing: border-box;
                cursor: pointer;
                h3{
                    font-size: 24px;
                    color: #333;
                    margin-top: 109px;
                }
                & > p{
                    display: none;
                    @media screen and (max-width: 900px){
                        display: block;
                        font-size: .5rem;
                        margin-top: .5rem;
                        color:#DCDCDC;
                    }
                }
                div{
                    visibility: hidden;
                    font-size: 14px;
                    display: flex;
                    justify-content: flex-start;
                    align-content: flex-start;
                    line-height: 24px;
                    .title{
                        font-weight: bold;
                        color:#333;
                        word-break: keep-all;
                    }
                    .content{
                        color:#666;
                        text-align: left;
                    }
                }
                &:hover{
                    background-color: white;
                    box-shadow:2px 0px 10px rgba(160,160,160,0.6);
                    h3{
                        margin-top: 50px;
                        @media screen and (min-width: 900px){
                            margin-bottom: 30px;
                        }
                        
                        color:#22479C;
                    }
                    div{
                      visibility: visible  
                    }
                    & > p{
                        display: block;
                    }

                }
                @media screen and (max-width:900px){
                    width: calc(50% - .54rem);
                    height: 6.25rem;
                    padding: 0;
                    h3{
                        font-size: .88rem;
                        margin-top: 3rem;
                    }
                    div{
                        display: none;
                    }
                }
            }
        }
        button{
            width: 240px;
            height: 48px;
            border-radius: 4px;
            border:solid 1px #22479C;
            background-color: white;
            font-size: 18px;
            color:#22479C;
            
            display: block;
            margin:120px auto 0 auto;
            cursor: pointer;
            @media screen and (max-width: 900px){
                display: none;
            }
        }

    }
</style>

