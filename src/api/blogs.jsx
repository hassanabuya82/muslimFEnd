
import axios from "axios";
import { api_url, get_token } from "../universal";


export const displayingMCQQuestions = async (currentPage, pageSize, selectedCategory) => {
  const token = get_token();
  let apiUrl = `${api_url}blogs/blogs/?page=${currentPage}&limit=${pageSize}`;

  if (selectedCategory) {
    apiUrl += `&category=${selectedCategory}`;
  }

  try {
    const res = await axios.get(apiUrl, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    console.log("API Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

  
export const fetchingLatestBlogs = async () => {
  const token = get_token();
  const res = await axios.get(`${api_url}blogs/latest/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res.data;
};

  
export const fetchingCategories = async () => {
  const token = get_token();
  const res = await axios.get(`${api_url}blogs/categories/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res.data;
};

export const fetchBlogDetail = async (blogId) => {
  const token = get_token();
  const res = await axios.get(`${api_url}blogs/blog_posts/${blogId}/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res.data;

}

export const addingComments = async (data) => {
  const token = get_token();
  const res = await axios.post(`${api_url}blogs/comments/`, data, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res.data;
};


export const addingContactUs = async (data) => {
  const token = get_token();
  const res = await axios.post(`${api_url}blogs/contact_us/`, data, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res.data;
};