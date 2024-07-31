// Helper function to calculate read time
const calculateReadTime = (content) => {
    const words = content.split(/\s+/).length; // Split content by spaces and count words
    const wordsPerMinute = 200; // Average reading speed
    return Math.ceil(words / wordsPerMinute); // Round up to nearest minute
  };

module.exports = { calculateReadTime };