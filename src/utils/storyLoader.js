
export const loadStories = () => {
  const modules = import.meta.glob('../content/stories/*.json', { eager: true });

  const stories = Object.values(modules).map((module) => {
    return module.default || module;
  });

  return stories.sort((a, b) => (a.order || 0) - (b.order || 0));
};


export const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};