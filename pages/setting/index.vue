<template>
	<view class="info" @click="jumpToSave">
		<image src="/static/images/avatar.png"></image>
		<text>微信用户</text>
	</view>
</template>

<script setup>
import { login } from '@/utils/request/api.js'
import { ref } from 'vue'

const jumpToSave = ()=>{
	uni.navigateTo({
		url: '/pages/profile/index'
	})
}
const chooseAvatar = (e)=>{
	console.log(e)
}
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
