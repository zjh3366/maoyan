<template>
    <div class="center-view">
        <div class="header">
            <img src=".././assets/logo.png" alt="">
            <span>立即登录</span>
        </div>
        <ul class="myorder">
            <li>
                <van-icon name="coupon-o" size="30px"/>
                <div>电影订单</div>
            </li>
            <li>
                <van-icon name="balance-list-o" size="30px"/>
                <div>商品订单</div>
            </li>
        </ul>
        <div class="mycard">
            <van-icon name="idcard" />
            <span>卖座券</span>
            <van-icon name="arrow" />
        </div>
        <div class="mycard">
            <van-icon name="bill-o" />
            <span>红包</span>
            <van-icon name="arrow" />
        </div>
        <div class="mycard">
            <van-icon name="after-sale" />
            <span>余额</span>
            <van-icon name="arrow" />
        </div>
        <div class="mycard">
            <van-icon name="service-o" />
            <span>客服</span>
            <van-icon name="arrow" />
        </div>
        <div class="mycard">
            <van-icon name="setting-o" />
            <span>设置</span>
            <van-icon name="arrow" />
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.center-view{
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    background: #f4f4f4;
    .header{
    height: 9.75rem;
    margin-top: -2.75rem;
    background-image: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.a5bdd690.png);
    padding-top: 2.75rem;
    padding-left: 1.375rem;
    display: flex;
    text-align: center;
    align-items: center;
    img{
        width: 3.9375rem;
        height: 3.9375rem;
        border-radius: 50%;
        border: 2px solid white;
        margin-right: 1.25rem;
    }
    span {
        color: white;
    }
}
.myorder{
display: flex;
margin-bottom: .625rem;
text-align: center;
align-items: center;
width: 100%;
font-size: 13px;
height: 4.9375rem;
background: white;
}
li{
    flex: 1;
    align-content: center;
    color: gray;
}
}
.mycard{
    height: 3.0625rem;
    background: white;
    padding: 0 15px;
    display: flex;
    align-items: center;
    span{
        flex: 1;
        margin-left: 15px;
        font-size: 15px;
    }
}
</style>
