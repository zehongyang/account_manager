<template>
	<view class="account-item">
		<view class="account-item-content">
			<h3>{{appName}}</h3>
			<text>{{account}}</text>
		</view>
		<uni-icons type="right" size="28rpx" color="#64748B"></uni-icons>
	</view>
</template>

<script setup>
	const props = defineProps({
		appName: {
			type: String,
			required: true
		},
		account: {
			type: String,
			required: true
		},
	})
</script>

<style>
	.account-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 124rpx;
		padding: 0rpx 24rpx;
		border: 1rpx solid #F1F5F9;
		margin-top: 24rpx;
		border-radius: 16rpx;
		box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0, 0, 0, 0.1);
	}
	.account-item-content h3{
		font-size: 28rpx;
		color: #0F172A;
	}
	.account-item-content text{
		font-size: 24rpx;
		color: #64748B;
	}
</style>