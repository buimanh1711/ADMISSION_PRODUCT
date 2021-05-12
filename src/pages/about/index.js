import { useEffect } from "react";
import { useDispatch } from "react-redux";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_TITLE",
      payload: "Thông tin",
    });
  });

  return (
    <div id="about-tab">
      <div className="about-tab-container">
        <h1>Bùi Văn Mạnh</h1>
        <h4>17/11/2001</h4>
        <h4>KHMT-DHK14</h4>
        <h4>Đại Học Công Nghiệp Hà Nội</h4>
        <h1 style={{ color: "blue", margin: 32 }}>
          ĐỒ ÁN TỐT NGHIỆP: Website tuyển sinh trực tuyến
        </h1>
      </div>
    </div>
  );
};

export default About;
