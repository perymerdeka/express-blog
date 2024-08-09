const { db } = require('../config/firebaseServer');
const { calculateReadTime } = require('../utils/calculateReadTime');
const { convertToWIB, convertFirestoreTimestampToFullDateTime, convertFirestoreTimestampToDate } = require('../utils/timeHelper');


const createPost = async (req, res) => {
    
  try {
    // const post = req.body;
    const { title, subtitle, content, imageUrl } = req.body;

    // validation
    if (!title || !subtitle || !content || !imageUrl) {
      return res.status(400).send('Missing required fields');
    }

    // waktu posting
    const readTime = calculateReadTime(content);
    const currentDate = convertToWIB(new Date()); // Set current date to WIB

    
    // response server
    const post = {
      title,
      subtitle,
      date: currentDate, // Set current date as date
      readTime,
      content,
      imageUrl,
      createdAt: currentDate, // Set current date as createdAt
    };

    const docRef = await db.collection('posts').add(post);
    res.status(201).send(`Post created with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).send('Error creating post: ' + error.message);
  }
};

const getAllPosts = async (req, res) => {
  console.log("get all posts");
  try {
    const postsSnapshot = await db.collection('posts').orderBy('createdAt', 'desc').get();
    const posts = postsSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        date: convertFirestoreTimestampToDate(data.date),
        createdAt: convertFirestoreTimestampToFullDateTime(data.createdAt)
      };
    });
    res.status(200).send(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send({ error: 'Failed to fetch posts' });
  }
};


const getPostById = async (req, res) => {
  console.log("get post by id", req.params.id);
  try {
    const doc = await db.collection('posts').doc(req.params.id).get();
    if (!doc.exists) {
      res.status(404).send('Post not found');
    } else {
      res.status(200).json({ id: doc.id, ...doc.data() });
    }
  } catch (error) {
    res.status(500).send('Error fetching post: ' + error.message);
  }
};


const updatePostById = async (req, res) => {
  try {
    console.log(req.body);
    const post = req.body;
    await db.collection('posts').doc(req.params.id).set(post, { merge: true });
    res.status(200).send('Post updated successfully');
  } catch (error) {
    res.status(500).send('Error updating post: ' + error.message);
  }
};

const deletePostById = async (req, res) => {
  try {
    await db.collection('posts').doc(req.params.id).delete();
    res.status(200).send('Post deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting post: ' + error.message);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById
};
