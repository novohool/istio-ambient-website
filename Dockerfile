# 使用 nginx 作为基础镜像
FROM nginx:alpine

# 将网站文件复制到 nginx 的默认目录
COPY . /usr/share/nginx/html/

# 配置 nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"] 