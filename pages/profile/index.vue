<template>
	<view>
		<view class="box-avatar">
			<text>头像</text>
			<button class="avatar-btn" open-type="chooseAvatar" @chooseavatar="chooseAvatar">
				<image class="avatar-img" :src="avatar || '/static/images/avatar.png'" mode="aspectFill"></image>
			</button>
		</view>
		<view class="box-nickname">
			<text>昵称</text>
			<input class="nickname-input" type="nickname" placeholder="请输入昵称" />
		</view>
		<view class="save-btn">
			<button class="save-btn-inner">保存</button>
		</view>
		
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	const avatar = ref('')
	const chooseAvatar = (e)=>{
		avatar.value = e?.detail?.avatarUrl || ''
		if (!avatar.value) {
			uni.showToast({
				title: '未获取到头像，请在微信小程序中重试',
				icon: 'none'
			})
		}
	}
</script>

<style>
	.box-avatar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		width: 100%;
		border-bottom: 1rpx solid #E5E5E5;
		padding: 48rpx 48rpx;
	}
	.box-avatar text {
		font-size: 32rpx;
	}
	.avatar-btn {
		margin: 0;
		padding: 0;
		line-height: 1;
		border: none;
		background: transparent;
	}
	.avatar-btn::after {
		border: none;
	}
	.avatar-img {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		display: block;
	}
		
	.box-nickname {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		width: 100%;
		border-bottom: 1rpx solid #E5E5E5;
		padding: 48rpx 48rpx;
	}
	.nickname-input {
		margin-left: auto;
		width: 320rpx;
		text-align: right;
	}
	.save-btn {
		width: 100%;
		padding: 48rpx 48rpx 0;
	}
	.save-btn-inner {
		width: 100%;
		height: 88rpx;
		background-color: #0F55D7;
		color: #fff;
		font-size: 32rpx;
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
	}
	.save-btn-inner::after {
		border: none;
	}
</style>
