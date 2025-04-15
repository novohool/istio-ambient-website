# Istio Ambient 指南网站

这是一个关于 Istio Ambient 模式的教程网站，提供了全面的 Ambient 模式介绍、架构对比、实践指南等内容。

## 本地开发

### 方法 1：使用 Python 简单服务器

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后访问 http://localhost:8000

### 方法 2：使用 Node.js http-server

```bash
# 安装 http-server
npm install -g http-server

# 启动服务
http-server
```

然后访问 http://localhost:8080

### 方法 3：使用 Docker（推荐）

```bash
# 构建镜像
docker build -t istio-ambient-website .

# 运行容器
docker run -d -p 80:80 istio-ambient-website
```

然后访问 http://localhost

## 项目结构

```
.
├── pages/          # 网站页面
├── css/           # 样式文件
├── js/            # JavaScript 文件
├── images/        # 图片资源
├── Dockerfile     # Docker 构建文件
├── nginx.conf     # Nginx 配置文件
└── README.md      # 项目说明文档
```

## 主要功能

- 响应式设计，支持移动端访问
- 骨架屏加载动画
- 代码高亮显示
- SVG 图表展示
- 交互式演示

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- iOS Safari
- Android Chrome

## 性能优化

- 关键 CSS 内联
- 资源预加载
- 图片懒加载
- Gzip 压缩
- 浏览器缓存


## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情 
