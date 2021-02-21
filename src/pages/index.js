import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../src/components/Container";
import Header from "../src/components/Header";
import Card from "../src/components/Card";
import View from "../src/components/View";
import Footer from "../src/components/Footer";
import NoteStripe from "../src/components/NoteStripe";
import Spinner from "../src/components/Spinner";
import GategoryPicker from "../src/components/GategoryPicker";
import { colors } from "../src/config/colors";
import Nav from "../src/components/Nav";

import courseApi from "../src/api/courseApi";
const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    const response = await courseApi.getAllCourses();
    console.log(response);
    if (response.status == "success") {
      setIsLoading(false);
      console.log("data fetched");
      setCourses(response.data);
    }
  };

  return (
    <>
      <Nav />
      <Header
        title="Discover, Learn, innoviate"
        subTitle="we take care of your learning path ,  just start"
      />
      <Container>
        <View display="flex" justifyContent="center">
          {/* <GategoryPicker
            items={[{ title: "Medical" }]}
            onChange={() => console.log("changed to medical")}
          /> */}

          <h1 className="heading">New Courses</h1>
        </View>
        <View key={index} m={20}>
          <View display="flex" flexWrap="wrap" justifyContent="center">
            {isLoading ? (
              <Spinner isLoading={true} />
            ) : (
              courses.map((data, index) => (
                <View m={10} key={index}>
                  <Card
                    link={`/course/${data._id}`}
                    image={data.picture.hq}
                    smallImage={data.picture.lq}
                    title={data.title}
                    subTitle={data.description}
                  />
                </View>
              ))
            )}
          </View>
        </View>
      </Container>
      <NoteStripe
        color="white"
        bgColro={colors.primary}
        title="High quality courses "
        subtitle="first high quality courses site in all iraq just join in in the path of learning new things "
      />
    </>
  );
};

export default index;
