// src/utils/storyLoader.js

export const loadStories = () => {
  // 1. Tìm tất cả file .json trong thư mục content/stories
  // { eager: true } nghĩa là đọc ngay lập tức, không cần chờ (async)
  const modules = import.meta.glob('../content/stories/*.json', { eager: true });

  // 2. Chuyển đổi từ dạng object của Vite sang mảng dữ liệu gọn gàng
  const stories = Object.values(modules).map((module) => {
    // Với file JSON, dữ liệu nằm trong module.default hoặc chính module đó
    return module.default || module;
  });

  // 3. Sắp xếp story theo số thứ tự (Order) từ nhỏ đến lớn
  return stories.sort((a, b) => (a.order || 0) - (b.order || 0));
};

// ... (code cũ giữ nguyên)

// Thêm hàm này vào cuối file để dùng cho giao diện
export const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};