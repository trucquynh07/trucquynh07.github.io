function validateNewsletter() {
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg");
    
    // Yêu cầu 2: Email must contain @ and domain
    // Sử dụng Regular Expression để kiểm tra định dạng email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        msg.innerText = "Email không hợp lệ (thiếu @ hoặc domain)!";
        msg.style.color = "red";
        return;
    }

    // Yêu cầu 2: At least one interest must be selected
    const interests = document.querySelectorAll(".interest:checked");
    if (interests.length < 1) {
        msg.innerText = "Vui lòng chọn ít nhất một sở thích!";
        msg.style.color = "red";
        return;
    }

    // Yêu cầu 4: Show success message when form is valid
    msg.innerText = "Đăng ký thành công! Cảm ơn bạn.";
    msg.style.color = "green";
}