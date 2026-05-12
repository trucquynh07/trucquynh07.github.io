// Yêu cầu 4: Hàm switchTab()
function switchTab(event, tabId) {
    // 1. Lấy tất cả các thẻ nội dung và ẩn chúng đi
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active"); // Sử dụng classList.remove()
    }

    // 2. Lấy tất cả các nút tab và bỏ trạng thái active
    const buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // 3. Hiển thị nội dung của tab hiện tại
    document.getElementById(tabId).classList.add("active"); // Sử dụng classList.add()

    // 4. Thêm trạng thái active cho nút vừa click
    event.currentTarget.classList.add("active");
}