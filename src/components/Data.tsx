import { Row } from "antd";
import { useGetAllSpacexQuery } from "../services/spacexdata";
import { Col } from "antd/es/grid";

const Data = () => {
  const {
    data: allSpacexData,
    isSuccess,
    error,
    isError,
    isLoading,
  } = useGetAllSpacexQuery();

  console.log(allSpacexData);

  if (isLoading) return <h1> Loading...</h1>;
  
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          {
            allSpacexData?.map(spaceData => (
              <div>
                <h2>Mission: {spaceData.mission_name}</h2>
                <p>{spaceData.details}</p>
                <h4>{spaceData.launch_year}</h4>
                <h4>{spaceData.launch_success}</h4>
              </div>
            )).slice(0, 15)
          }
        </Col>
        <Col span={8}>2</Col>
        <Col span={8}>3</Col>
      </Row>
    </div>
  );
};

export default Data;