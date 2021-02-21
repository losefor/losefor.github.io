import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "../../src/components/Container";
import ListItem from "../../src/components/ListItem";
import View from "../../src/components/View";
import Spinner from "../../src/components/Spinner";
import Nav from "../../src/components/Nav";
import axios from 'axios'
import courseApi from "../../src/api/courseApi";

export default function CourseViewr({ data }) {
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState();
  const router = useRouter();

  useEffect(() => {
    getAllCourses();
  }, [router]);

  const getAllCourses = async () => {
    if (data.status == "success") {
      console.log(data.data);
      setCourse(data.data);
      setIsLoading(false);
    }
  };

  return (
    <div >
      <Nav/>
      <Container>
        {!isLoading && (
          <View>
            <h2 className='heading'>{course.title}</h2>
          </View>
        )}
        {isLoading ? (
          <Spinner isLoading={isLoading} />
        ) : (
          course.videos.map((data, index) => (
            <div key={index}>
              <ListItem
                className={"list-cont"}
                link={`/course/video/${data.video._id}`}
                title={data.video.title}
                image
                videoId={data.video.videoId}
              />
            </div>
          ))
        )}
      </Container>
      <style jsx>{`
        .div {
          width: 100%;
          height: 1px;
        }

        .list-cont {
          border: solid thin black;
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps(context) {
  // `/course/${courseId}`
  const response = await axios.get(`https://coursaty-backend.herokuapp.com/course/${context.params.id}`);
  return {
    props: {
      data : response.data
    }, // will be passed to the page component as props
  }
}