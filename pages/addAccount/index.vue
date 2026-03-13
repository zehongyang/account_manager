<template>
	<uni-forms :modelValue="formData" label-position="top" class="uni-forms">
		<uni-forms-item label="应用" name="appName">
			<uni-easyinput type="text" v-model="formData.appName" placeholder="请输入应用名称" />
		</uni-forms-item>
		<uni-forms-item label="账号" name="account">
			<uni-easyinput type="text" v-model="formData.account" placeholder="请输入账号" />
		</uni-forms-item>
		<uni-forms-item label="密码" name="password">
			<uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
		</uni-forms-item>
		<button class="btn" @click="submit">保存</button>
	</uni-forms>
	
</template>

<script setup>
	import { ref } from 'vue'

	const formData = ref({
		appName: '',
		account: '',
		password: ''
	})

	const submit = ()=>{
		console.log(formData.value)
	}
</script>

<style>
	page {
		padding: 0rpx 32rpx;
	}
	.uni-forms {
		margin-top: 32rpx;
	}
	.btn{
		width: 100%;
		height: 80rpx;
		background-color: #0F55D7;
		color: #fff;
		font-size: 32rpx;
		border-radius: 16rpx;
	}
</style>
