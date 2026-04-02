import http from './index.js'

export const login = (data) => http.post('/login', data)

export const uploadFile = (filePath, formData = {}, name = 'file', header = {}) =>
	http.upload('/upload', {
		filePath,
		name,
		formData,
		header
	})

export const getFileMd5 = (filePath) =>
	new Promise((resolve, reject) => {
		uni.getFileInfo({
			filePath,
			digestAlgorithm: 'md5',
			success: (res) => resolve(res.digest),
			fail: reject
		})
	})

export const getFileExtension = (filePath = '') => {
	const purePath = String(filePath).split('?')[0].split('#')[0]
	const fileName = purePath.split('/').pop().split('\\').pop()
	const dotIndex = fileName.lastIndexOf('.')
	if (dotIndex <= 0) {
		return ''
	}
	return fileName.slice(dotIndex + 1).toLowerCase()
}
