<template>

    <div class="item-banner-wrap">
        <div class="banner-left">
            <div>
                <h3>{{$t('research.banner1')}}</h3>
                <p>{{$t('research.banner2')}}</p>
            </div>
        </div>
        <div class="banner-right"></div>
    </div>

</template>
<script>
export default {
    components:{

    }
}
</script>
<style lang="less" scoped>
    .item-banner-wrap{
        @media screen and (min-width: 900px){
            background-image: url(../../assets/imgs/research/banner.png);
        }
        @media screen and (max-width: 900px){
            height: 10.875rem;
        }
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        height: 300px;
        width: 100%;
        position: relative;

        .banner-left{
            position: absolute;
            background-color: #22479C;

            width: 48%;
            left: 0;
            height: 100%;
            
            div{
                height: 100px;
                position: absolute;
                top:90px;
                right: 140px;
                h3{
                    font-size: 40px;
                    color:white;
                    font-weight: normal;
                    margin:0;
                    padding: 0;
                }
                p{
                    margin-top: 40px;
                    color:white;
                    font-size: 24px;
                }
                @media screen and (max-width: 900px){
                    top:3.43rem;
                    left: 0;
                    right: 0;
                    h3{
                        font-size: 1.68rem;
                        text-align: center;
                    }
                    p{
                        margin-top: 1.25rem;
                        text-align: center;
                        font-size: 1rem;
                    }
                }
            }
        @media screen and (max-width: 900px){
            width: 100%;
        }
        }
        .banner-right{
            @media screen and (max-width: 900px){
                display: none
            }
            position: absolute;
            right: 0;

            height: 100%;
            width: 60%;
        }
    }
</style>
