// Yêu cầu 4: Hàm kiểm tra validation cơ bản
function validateContactForm() {
    // Lấy giá trị từ các trường
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const successDisplay = document.getElementById("successMessage");

    // Yêu cầu 4: Kiểm tra xem các trường có trống hay không
    if (name === "" || email === "" || message === "") {
        alert("Vui lòng điền đầy đủ tất cả các trường!");
        successDisplay.innerText = ""; // Xóa thông báo thành công nếu có lỗi
        return;
    }

    // Yêu cầu 4: Hiển thị thông báo thành công khi tất cả đã được điền
    successDisplay.innerText = "Cảm ơn bạn! Tin nhắn đã được gửi thành công.";
    
    // Tùy chọn: Xóa sạch form sau khi gửi thành công
    document.getElementById("contactForm").reset();
}
