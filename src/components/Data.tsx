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
  
  const length = allSpacexData?.length;
  console.log('the length of the data is', length);

  if (isLoading) return <h1> Loading...</h1>;
  
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          {
            allSpacexData?.map(spacexData => (
              <div>
                <h2>{spacexData.rocket?.rocket_name}</h2>
                <h3>Mission: {spacexData.mission_name}</h3>
                <h4>Launched in: {spacexData.launch_year}</h4>
              </div>
            )).slice(0, 37)
          }
        </Col>
        <Col span={8}>
          {
            allSpacexData?.map(spacexData => (
              <div>
                <h2>{spacexData.rocket?.rocket_name}</h2>
                <h3>Mission: {spacexData.mission_name}</h3>
                <h4>Launched in: {spacexData.launch_year}</h4>
              </div>
            )).slice(37, 74)
          }
        </Col>
        <Col span={8}>
          {
            allSpacexData?.map(spacexData => (
              <div>
                <h2>{spacexData.rocket?.rocket_name}</h2>
                <h3>Mission: {spacexData.mission_name}</h3>
                <h4>Launched in: {spacexData.launch_year}</h4>
              </div>
            )).slice(74, 111)
          }
        </Col>
      </Row>
    </div>
  );
};

export default Data;