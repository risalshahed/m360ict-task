import { useGetAllSpacexQuery } from "../services/spacexdata";

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
  return <div> Data: </div>;
};

export default Data;