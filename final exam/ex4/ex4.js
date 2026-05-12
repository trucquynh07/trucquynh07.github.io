// Biến để theo dõi trạng thái lọc (đang hiện tất cả hay chỉ hiện món chay)
let showOnlyVeg = false;

function filterMenu() {
    // Yêu cầu 3: Sử dụng getElementsByClassName()
    const allItems = document.getElementsByClassName('menu-item');
    showOnlyVeg = !showOnlyVeg; // Đảo ngược trạng thái mỗi khi bấm nút

    for (let i = 0; i < allItems.length; i++) {
        // Kiểm tra xem món ăn đó có class "veg" hay không
        const isVeg = allItems[i].classList.contains('veg');

        if (showOnlyVeg) {
            // Nếu đang ở chế độ lọc món chay
            if (isVeg) {
                allItems[i].style.display = "block"; // Hiện món chay
            } else {
                allItems[i].style.display = "none";  // Ẩn món không phải chay
            }
        } else {
            // Nếu tắt lọc, hiện lại tất cả các món
            allItems[i].style.display = "block";
        }
    }
}