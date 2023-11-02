document.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-to-cart")) {
    const productId = event.target.dataset.productId;
    const productName = event.target.dataset.productName;
    const productPrice = parseFloat(event.target.dataset.productPrice);

    addToCart(productId, productName, productPrice);
  }
});

function addToCart(productId, productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const products = [
    {
      id: 1,
      name: "Bơ 034 VietGap 1kg",
      description: "Lớp vỏ xanh bóng đẹp mắt.",
      category: ["Trái cây VietGap", "Trái cây nhập khẩu", "Trái cây"],
      image: ["https://csfood.vn/wp-content/uploads/2019/03/b%C6%A1-034-1.jpg"],
      price: 100000,
    },
    {
      id: 2,
      name: "Bơ Sáp VietGap Túi 500g",
      description: "Được trồng theo phương pháp hữu cơ.",
      category: ["Trái cây VietGap", "Trái cây nhập khẩu", "Trái cây"],
      image: [
        "https://csfood.vn/wp-content/uploads/2015/01/B%C6%A1-S%C3%A1p-VietGap.jpg",
      ],
      price: 70000,
    },
    {
      id: 3,
      name: "Bưởi Da Xanh Ruột Hồng VietGap",
      description: "Hương vị tươi ngon. Được trồng theo quy trình sạch.",
      category: ["Trái cây VietGap", "Trái cây"],
      image: [
        "https://csfood.vn/wp-content/uploads/2018/11/b%C6%B0%E1%BB%9Fi-da-xanh....png",
      ],
      price: 70000,
    },
    {
      id: 4,
      name: "Cam Cara Ruột Đỏ NK Úc túi 1kg",
      description: "Có nhiều tác dụng tốt với sức khỏe.",
      category: ["Trái cây VietGap", "Trái cây nhập khẩu", "Trái cây"],
      image: [
        "https://csfood.vn/wp-content/uploads/2015/01/B%C6%A1-S%C3%A1p-VietGap.jpg",
      ],
      price: 155000,
    },
    {
      id: 5,
      name: "Chuối Cau VietGap",
      description: "Giàu các dưỡng chất cho cơ thể.",
      category: ["Trái cây VietGap", "Trái cây"],
      image: [
        "https://csfood.vn/wp-content/uploads/2020/10/Chu%E1%BB%91i-Cau-VietGap-1.png",
      ],
      price: 30000,
    },
    {
      id: 6,
      name: "Combo Trái Cây Sạch Theo Tháng",
      description: "Đảm bảo tươi ngon.",
      category: ["Trái cây VietGap", "Trái cây"],
      image: [
        "https://csfood.vn/wp-content/uploads/2019/03/combo-tr%C3%A1i-c%C3%A2y-s%E1%BA%A1ch.png",
      ],
      price: 2020000,
    },
    {
      id: 7,
      name: "Dưa Hấu Không Hạt VietGap Long An",
      description: "Vỏ mỏng, nhiều nước, không hạt. ",
      category: ["Trái cây VietGap", "Trái cây"],
      image: ["https://csfood.vn/wp-content/uploads/2022/01/2.1.png"],
      price: 30000,
    },
    {
      id: 8,
      name: "Dâu Tây New Zealand",
      description: "Quả to tròn đều và tươi ngon.",
      category: ["Trái cây VietGap", "Trái cây nhập khẩu", "Trái cây"],
      image: [
        "https://csfood.vn/wp-content/uploads/2015/01/Dau-tay-Da-Lat-Ngoc-Ngoc-1.jpg",
      ],
      price: 380000,
    },
    {
      id: 9,
      name: "Mãng Cầu Xiêm VietGap",
      description: "Được trồng theo quy trình sạch",
      category: ["Trái cây VietGap", "Trái cây"],
      image: [
        "https://csfood.vn/wp-content/uploads/2015/01/Mang-cau-xiem-Ngoc-Ngoc.jpg",
      ],
      price: 60000,
    },
    {
      id: 10,
      name: "Măng Cụt VietGap Túi 1kg",
      description: "Được trồng theo tiêu chuẩn VietGAP",
      category: ["Trái cây VietGap", "Trái cây"],
      image: [
        "https://csfood.vn/wp-content/uploads/2017/07/m%C4%83ng-c%E1%BB%A5t.png",
      ],
      price: 95000,
    },
    {
      id: 11,
      name: "Đu Đủ Ruột Vàng VietGap",
      description: "Ruột quả mềm, vị ngọt đậm thơm ngon",
      category: ["Trái cây VietGap", "Trái cây nhập khẩu", "Trái cây"],
      image: [
        "https://csfood.vn/wp-content/uploads/2020/08/%C4%90u-%C4%90%E1%BB%A7-Ru%E1%BB%99t-V%C3%A0ng-VietGap.png",
      ],
      price: 38000,
    },
  ];
  module.exports = products;

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}
