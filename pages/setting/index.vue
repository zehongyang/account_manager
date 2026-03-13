<template>
	<view class="info">
		<image src="/static/images/avatar.png"></image>
		<text>未登录</text>
		<button @click="login">登录</button>
	</view>
</template>

<script setup>
	const login = ()=>{
		uni.login({
  			provider: 'weixin', 
  			success: function (loginRes) {
    		console.log(loginRes);
  		}
	});
	}
</script>

<style>
	.info {
		display: flex;
		flex-direction: column;
		gap: 16rpx;
		justify-content: center;
		align-items: center;
		margin-top: 48rpx;
		width: 100%;
		padding: 0rpx 48rpx;
	}
	.info image {
		width: 192rpx;
		height: 192rpx;
		border-radius: 50%;
	}
	.info button{
		width: 100%;
		height: 80rpx;
		background-color: #0F55D7;
		color: #fff;
		font-size: 32rpx;
		border-radius: 16rpx;
	}
</style>
