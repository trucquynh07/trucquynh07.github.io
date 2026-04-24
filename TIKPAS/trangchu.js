// Cấu hình Tailwind nếu cần dùng thêm class động
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ffb0d0",
                "secondary": "#91d0e1",
            }
        }
    }
};

// Hiệu ứng click cho Navigation
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});