module.exports = {
    devServer: {
        proxy: {
            '/apiurl': {
                target: 'http://www.wasd003.cn:8888/', // 后端url
                changeOrigin: true,
                pathRewrite: {
                    '^/apiurl': '/'
                }
            }
        },
        port: 8080 // 前端端口号
    }
}
