// 主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
  // 移动端菜单切换
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('header');
  
  // 菜单切换处理函数
  function handleMenuToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    
    // 切换菜单状态
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // 添加点击外部关闭菜单的功能
    if (menuToggle.classList.contains('active')) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
  }
  
  // 关闭菜单的函数
  function closeMenu(e) {
    if (!header.contains(e.target)) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.removeEventListener('click', closeMenu);
    }
  }
  
  // 绑定菜单切换事件
  if (menuToggle && navLinks) {
    // 确保菜单在页面加载时处于关闭状态
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    
    // 绑定点击事件
    menuToggle.addEventListener('click', handleMenuToggle);
    
    // 阻止菜单内部点击事件冒泡
    navLinks.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  // 代码高亮
  const codeBlocks = document.querySelectorAll('pre code');
  if (codeBlocks.length > 0 && typeof hljs !== 'undefined') {
    codeBlocks.forEach(block => {
      hljs.highlightBlock(block);
    });
  }
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // 侧边栏当前页面高亮
  const currentPage = window.location.pathname.split('/').pop();
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  
  sidebarLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
  
  // 导航栏当前页面高亮
  const navbarLinks = document.querySelectorAll('.nav-links a');
  
  navbarLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
  
  // 图表交互
  const diagrams = document.querySelectorAll('.interactive-diagram');
  
  diagrams.forEach(diagram => {
    const elements = diagram.querySelectorAll('[data-tooltip]');
    
    elements.forEach(element => {
      element.addEventListener('mouseenter', function() {
        const tooltip = this.getAttribute('data-tooltip');
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'tooltip';
        tooltipElement.textContent = tooltip;
        
        this.appendChild(tooltipElement);
      });
      
      element.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
          this.removeChild(tooltip);
        }
      });
    });
  });
});
