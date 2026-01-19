
export const loadStories = () => {
  const modules = import.meta.glob('../content/stories/*.json', { eager: true });

  const stories = Object.keys(modules).map((path) => {
    const data = modules[path];
    
    const filename = path.split('/').pop().replace('.json', '');
    
    let imageUrl = data.image;

    if (imageUrl && !imageUrl.startsWith('http')) {
      const cleanPath = imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl;
      
      imageUrl = import.meta.env.BASE_URL + cleanPath;
    }

    return {
      id: filename,
      ...data, 
      image: imageUrl
    };
  });

  return stories.sort((a, b) => (a.order || 0) - (b.order || 0));
};

export const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};