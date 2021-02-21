import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import View from "../../src/components/View";
import Nav from "../../src/components/Nav";
import Spinner from "../../src/components/Spinner";
import Container from "../../src/components/Container";
import Comment from "../../src/components/Comment";
import TextInput from "../../src/components/TextInput";
import VideoPlayer from "../../src/components/VideoPlayer/VideoPlayer";
import GategoryPicker from "../../src/components/GategoryPicker";
import MobileVideoList from "../../src/components/VideoPlayer/MobileVideoList";

import VideoList from "../../src/components/VideoPlayer/VideoList";
import Resources from "../../src/components/Resources";

import { getToken } from "../../src/auth/Storage";
import courseApi from "../../src/api/courseApi";

export default function VideoViewr({}) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [videoDeatils, setVideoDetails] = useState({ title: "" });
  const [course, setCourse] = useState({ title: "" });
  const [comments, setComments] = useState([]);
  const [token, setToken] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [gategorySelected, setGategorySelected] = useState("");

  const getSpecificCourse = async () => {
    if (router) {
      const response = await courseApi.getSpecificCourse(router.query.id);
      if (response.status == "success") {
        setCourse(response.data);
        getVideoDetails(response.data.sections[0].videos[0].video._id)
        setSelectedVideo({
          videoId: response.data.sections[0].videos[0].video.videoId,
          title: response.data.sections[0].videos[0].video.title,
        });
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getSpecificCourse();
  }, [router]);

  useEffect(() => {
    getTokenFromStorage();
  }, []);

  useEffect(() => {
    if (selectedVideo) {
      getVideoDetails(selectedVideo._id);
      getComments(selectedVideo._id);
    }
  }, [selectedVideo]);

  const getVideoDetails = async (_id) => {
    const resposne = await courseApi.getVideoDetails(_id);
    if (resposne.status == "success") setVideoDetails(resposne.data);

    // console.log(resposne);
  };

  const getTokenFromStorage = async () => {
    setToken(await getToken());
  };

  const getComments = async (_id) => {
    // console.log(_id);
    const response = await courseApi.getVideoSpecificComments(_id);
    // console.log(response.data);
    if (response.status == "success") {
      setComments(response.data);
    }
  };

  const addComment = async (comment) => {
    if (!token) router.push("/signup");

    const response = await courseApi.postComment({
      comment,
      videoId: videoDeatils._id,
    });

    // console.log(response);
    if (response.status == "success") {
      setComments([response.data, ...comments]);
      setComment("");
    }
  };

  return (
    <>
      <Nav />
      {isLoading ? (
        <Spinner isLoading={true} />
      ) : (
        <Container>
          <View display="flex" mv={2}>
            <View flex={1}>
              <View
                mv={1}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <VideoPlayer
                  url={`https://youtu.be/${selectedVideo.videoId}`}
                  controls
                  light={`https://img.youtube.com/vi/${selectedVideo.videoId}/hqdefault.jpg`}
                  playing={true}
                  width="100%"
                  height="300px"
                />
              </View>

              <MobileVideoList
                video={videoDeatils}
                sections={course.sections}
                onChange={(video) => {
                  setSelectedVideo(video);
                }}
                selectedVideo={selectedVideo._id}
              />

              <GategoryPicker
                items={[
                  { title: "Description" },
                  { title: "Resources" },
                  { title: "Q&A" },
                ]}
                onChange={(val) => setGategorySelected(val.title)}
              />

              {gategorySelected == "Description" && (
                <p className="paragraph">{videoDeatils.description ? videoDeatils.description : 'there is no description' }</p>
              )}

              {gategorySelected == "Resources" && <Resources />}

              {gategorySelected == "Q&A" && (
                <>
                  <TextInput
                    icon={faComment}
                    placeholder="اكتب تعليق"
                    onEnter={(val) => addComment(val)}
                    onChange={(val) => setComment(val)}
                    value={comment}
                    width={"100%"}
                  />

                  {(comments || []).map((comment) => (
                    <Comment
                      name={comment.user.name}
                      comment={comment.comment}
                    />
                  ))}
                </>
              )}
            </View>

            <VideoList
              onChange={(video) => {
                setSelectedVideo(video);
              }}
              sections={course.sections}
              className="hide--700"
              selectedVideo={selectedVideo._id}
            />
          </View>
        </Container>
      )}
    </>
  );
}
