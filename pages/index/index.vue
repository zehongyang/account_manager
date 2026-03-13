<template>
	<view class="input-group">
		<icon type="search" size="28rpx" color="#94A3B8"/>
		<input class="input" type="text" placeholder="请输入应用名称" placeholder-style="color:#94A3B8">
	</view>
	<view class="account-list">
		<account-item appName="微信" account="13000000000"></account-item>
		<account-item appName="微信" account="13000000000"></account-item>
		<account-item appName="微信" account="13000000000"></account-item>
		<account-item appName="微信" account="13000000000"></account-item>
		<account-item appName="微信" account="13000000000"></account-item>
		<account-item appName="微信" account="13000000000"></account-item>
		<account-item appName="微信" account="13000000000"></account-item>
		<account-item appName="微信" account="13000000000"></account-item>
		<account-item appName="微信" account="13000000000"></account-item>
	</view>
	<uni-fab horizontal="right" vertical="bottom" @fabClick="addAccount"></uni-fab>
</template>

<script setup>
	const addAccount = ()=>{
		uni.navigateTo({
			url: '/pages/addAccount/index',
		})
	}
</script>

<style>
	page{
		padding: 0 32rpx;
	}
	.input-group {
		display: flex;
		gap: 16rpx;
		align-items: center;
		background-color: #F1F5F9;
		padding: 10rpx 20rpx;
		border-radius: 14rpx;
		height: 80rpx;
		margin-top: 20rpx;
	}
	.input {
		flex: 1;
		font-size: 28rpx;
		color: #94A3B8;
	}
	.account-list{
		margin-top: 48rpx;
	}
</style>
