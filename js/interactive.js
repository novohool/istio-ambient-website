document.addEventListener('DOMContentLoaded', function() {
  // 导航菜单切换
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // 侧边栏导航
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // 移除所有活动类
      sidebarLinks.forEach(l => l.classList.remove('active'));
      // 添加活动类到当前点击的链接
      this.classList.add('active');
      
      // 如果在同一页面内导航，防止默认行为并平滑滚动
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // 检查当前页面的URL，高亮相应的导航链接
  const currentPath = window.location.pathname;
  const navLinksMain = document.querySelectorAll('.nav-links a');
  
  navLinksMain.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.endsWith(linkPath) || 
        (currentPath.endsWith('/') && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // 代码高亮示例
  const codeBlocks = document.querySelectorAll('pre code');
  if (codeBlocks.length > 0 && typeof hljs !== 'undefined') {
    codeBlocks.forEach(block => {
      hljs.highlightElement(block);
    });
  }
  
  // 图像比较滑块
  const imageComparisons = document.querySelectorAll('.image-comparison');
  imageComparisons.forEach(comparison => {
    const slider = comparison.querySelector('.comparison-slider');
    const beforeImage = comparison.querySelector('.before-image');
    
    if (slider && beforeImage) {
      slider.addEventListener('input', function() {
        beforeImage.style.width = this.value + '%';
      });
    }
  });
  
  // 标签切换
  const tabButtons = document.querySelectorAll('.tab-buttons button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // 移除所有活动类
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // 添加活动类到当前标签
      this.classList.add('active');
      document.querySelector(`.tab-content[data-tab="${targetTab}"]`).classList.add('active');
    });
  });
  
  // 初始化第一个标签为活动状态
  const firstTabButton = document.querySelector('.tab-buttons button');
  if (firstTabButton) {
    firstTabButton.click();
  }
  
  // 代码示例交互
  const codeInput = document.getElementById('code-input');
  const codeOutput = document.getElementById('code-output');
  const runCodeButton = document.getElementById('run-code');
  
  if (codeInput && codeOutput && runCodeButton) {
    runCodeButton.addEventListener('click', function() {
      const code = codeInput.value;
      // 简单的kubectl命令高亮处理
      const highlightedCode = highlightKubectlCommand(code);
      codeOutput.innerHTML = highlightedCode;
    });
  }
  
  // 简单的kubectl命令高亮函数
  function highlightKubectlCommand(code) {
    // 替换kubectl命令
    let highlighted = code.replace(/(kubectl)/g, '<span class="cmd">$1</span>');
    // 替换参数标志
    highlighted = highlighted.replace(/(-[a-zA-Z]|--[a-zA-Z-]+)/g, '<span class="kwd">$1</span>');
    // 替换命名空间
    highlighted = highlighted.replace(/(namespace|ns)(\s+)([a-zA-Z0-9-]+)/g, '$1$2<span class="ns">$3</span>');
    return highlighted;
  }
  
  // SVG动画效果
  const animateSvgButtons = document.querySelectorAll('.animate-svg-button');
  
  animateSvgButtons.forEach(button => {
    button.addEventListener('click', function() {
      const svgId = this.getAttribute('data-svg');
      const svg = document.getElementById(svgId);
      
      if (svg) {
        // 添加动画类
        svg.classList.add('animated');
        // 动画结束后移除类
        setTimeout(() => {
          svg.classList.remove('animated');
        }, 2000);
      }
    });
  });
});
