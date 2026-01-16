
export const loadStories = () => {
  const modules = import.meta.glob('../content/stories/*.json', { eager: true });

  const stories = Object.keys(modules).map((path) => {
    const data = modules[path];
    
    const filename = path.split('/').pop().replace('.json', '');
    
    return {
      id: filename,
      ...data,
      
      image: data.image ? (data.image.startsWith('http') ? data.image : data.image) : null
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