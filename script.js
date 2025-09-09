// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(74, 144, 226, 0.95)';
        header.style.padding = '15px 0';
        header.style.transition = 'all 0.3s ease';
    } else {
        header.style.backgroundColor = '#4a90e2';
        header.style.padding = '20px 0';
    }
});

// 导航栏高亮已在CSS中通过.current类实现，这里不再需要滚动检测

// 回到顶部按钮
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '30px';
backToTopButton.style.right = '30px';
backToTopButton.style.width = '50px';
backToTopButton.style.height = '50px';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.backgroundColor = '#4a90e2';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.fontSize = '24px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
backToTopButton.style.opacity = '0';
backToTopButton.style.transition = 'opacity 0.3s ease';
backToTopButton.style.zIndex = '1000';

// 添加到页面
document.body.appendChild(backToTopButton);

// 显示/隐藏回到顶部按钮
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
    }
});

// 回到顶部功能
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 由于导航链接现在跳转到不同页面，不再需要页面内滚动动画代码

// 为页面元素添加入场动画
function animateOnScroll() {
    // 协会简介部分动画
    const introElements = document.querySelectorAll('.intro-content');
    introElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
    
    // 流动照片墙部分动画
    const gallerySection = document.querySelector('.gallery-section');
    if (gallerySection) {
        const galleryItems = gallerySection.querySelectorAll('.photo-item');
        galleryItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (itemPosition < screenPosition) {
                // 为照片项添加错落有致的入场效果
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    }
    
    // 招新信息部分动画
    const recruitmentSection = document.querySelector('.recruitment-section');
    if (recruitmentSection) {
        const recruitmentElements = recruitmentSection.querySelectorAll('.recruitment-content');
        recruitmentElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // 联系方式部分动画
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        const contactElements = contactSection.querySelectorAll('.contact-info, .contact-qrcode');
        contactElements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.transitionDelay = `${index * 0.2}s`;
            }
        });
    }
}

// 初始设置
window.addEventListener('load', function() {
    // 设置协会简介部分的初始动画状态
    const introElements = document.querySelectorAll('.intro-content');
    introElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // 设置流动照片墙部分的初始动画状态
    const gallerySection = document.querySelector('.gallery-section');
    if (gallerySection) {
        const galleryItems = gallerySection.querySelectorAll('.photo-item');
        galleryItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    }
    
    // 设置招新信息部分的初始动画状态
    const recruitmentSection = document.querySelector('.recruitment-section');
    if (recruitmentSection) {
        const recruitmentElements = recruitmentSection.querySelectorAll('.recruitment-content');
        recruitmentElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
    }
    
    // 设置联系方式部分的初始动画状态
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        const contactElements = contactSection.querySelectorAll('.contact-info, .contact-qrcode');
        contactElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
    }
    
    // 初始触发一次动画检查
    animateOnScroll();
});

// 滚动时触发动画
window.addEventListener('scroll', animateOnScroll);

// 视频全屏功能
document.addEventListener('DOMContentLoaded', function() {
    const promoVideo = document.getElementById('promoVideo');
    const videoContainer = document.querySelector('.video-container');
    
    if (promoVideo && videoContainer) {
        // 点击视频容器进入全屏
        videoContainer.addEventListener('click', function() {
            if (promoVideo.requestFullscreen) {
                promoVideo.requestFullscreen();
            } else if (promoVideo.webkitRequestFullscreen) {
                promoVideo.webkitRequestFullscreen();
            } else if (promoVideo.msRequestFullscreen) {
                promoVideo.msRequestFullscreen();
            }
        });
    }
});