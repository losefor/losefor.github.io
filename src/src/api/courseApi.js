import client from "./client";

const getAllCourses = async (courseId) => {
  const response = await client.get(`/course`);
  return response.data;
};

const getSpecificCourse = async (courseId) => {
  // console.log(courseId)
  const response = await client.get(`/course/${courseId}`);
  return response.data;
};

const getVideoSpecificComments = async (_id)=>{
  const response = await client.get(`/video/comment/${_id}`)
  return response.data
  // console.log(response)
}

const getVideoDetails = async (_id)=>{
  // console.log(_id)
  const response = await client.get(`/video/${_id}`)
  return response.data
}

const postComment = async (data) =>{
  const response = await client.post(`/video/comment`,data)
  return response.data
}

export default {
  getAllCourses,
  getSpecificCourse,
  getVideoSpecificComments,
  getVideoDetails,
  postComment
};
