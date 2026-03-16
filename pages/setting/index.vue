<template>
	<view class="info">
		<image src="/static/images/avatar.png"></image>
		<text>未登录</text>
		<button @click="wxLogin">登录</button>
	</view>
</template>

<script setup>
import { login } from '@/utils/request/api.js'
	
	const wxLogin = async ()=>{
		const res = await login({
      			code: ""
      		})
		// uni.login({
  		// 	provider: 'weixin', 
  		// 	success: function (loginRes) {
		// 	console.log(loginRes);
    	// 	const res = await login({
      	// 		code: ""
      	// 	})
  		// }
	// });
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
