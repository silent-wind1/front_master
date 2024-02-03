1. MySQL版本为8.0.27，npm版本为9.4.0，node版本为v16.18.0
2. SQL 文件位于根目录下的blog.sql，将其中的数据导入到自己本地数据库中
3. ES 映射文件位于deploy文件夹下
4. 修改后端配置文件中的数据库等连接信息，项目中使用到的关于阿里云、腾讯云功能和第三方授权登录等需要自行开通
5. 一定要将前端shoka-admin和shoka-blog的 utils 下的 token.ts 中的{ domain: domain }给删除，然后再npm install、npm run dev
6. 项目启动后，使用admin@qq.com管理员账号登录后台，密码为123456