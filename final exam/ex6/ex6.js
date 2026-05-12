// Yêu cầu 3: Hàm toggleMenu()
function toggleMenu() {
    // Lấy phần tử menu điều hướng qua ID
    const nav = document.getElementById("nav-menu");

    // Yêu cầu 3: Sử dụng classList.toggle("hidden")
    // Nếu menu đang hiện, nó sẽ thêm class "hidden" để ẩn đi.
    // Nếu menu đang ẩn, nó sẽ xóa class "hidden" để hiện lại.
    nav.classList.toggle("hidden");
}