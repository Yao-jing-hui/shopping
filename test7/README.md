# 外卖代购平台

这是一个基于HTML、CSS和JavaScript的静态外卖代购平台网站。

## 功能特点

- 响应式设计，适配手机、平板和PC端
- 商家列表和详情展示
- 购物车功能
- 订单结算
- 用户登录/注册
- 个人中心

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Bootstrap Icons

## 项目结构

```
├── index.html          # 首页
├── restaurants.html    # 商家列表页
├── restaurant-detail.html  # 商家详情页
├── checkout.html       # 订单结算页
├── profile.html        # 个人中心页
├── login.html          # 登录/注册页
├── css/
│   └── style.css       # 自定义样式
├── js/
│   └── main.js         # 主要JavaScript功能
└── images/             # 图片资源
```

## 使用说明

1. 克隆项目到本地
2. 使用浏览器打开 `index.html` 文件
3. 浏览各个页面，体验功能

## 开发说明

- 所有页面都使用Bootstrap 5框架构建
- 使用localStorage实现购物车数据持久化
- 使用Intersection Observer实现图片懒加载
- 使用Bootstrap的Toast组件实现提示功能

## 待优化项

- 添加更多动画效果
- 优化移动端体验
- 添加更多交互功能
- 实现数据持久化
- 添加更多商家和菜品数据

## 贡献指南

欢迎提交Issue和Pull Request来帮助改进项目。

## 许可证

MIT License