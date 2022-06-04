// import axios from "axios";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getDetail } from "../store/info-slice";
// const Details = () => {
//   const detail = useSelector((state) => state.details.detail);
//   const dispatch = useDispatch();
//   const params = useParams();
//   useEffect(() => {
//     axios
//       .get(
//         `https://gateway.marvel.com:443/v1/public/characters/${params.id}?ts=1&apikey=${process.env.REACT_APP_KEY}&hash=${process.env.REACT_APP_HASH}`
//       )
//       .then((response) => dispatch(getDetail(response.data)));
//   }, [params, dispatch]);
//   return (
//     <div style={{ textAlign: "center" }}>
//       {detail.status === "Ok" && detail.data.results[0].name}
//       {params.id}
//     </div>
//   );
// };

// export default Details;
