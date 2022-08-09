import Headline from "./NameHeadline";
import DisplayImg from "./DisplayImg";
function Home() {
  let nameArr = [
    "or gadamo",
    "lior david",
    "aviel taka",
    "batel haiyalo",
    "yoni",
  ];
  let picArr = ["pic1.jpg", "pic2.jpg", "pic3.webp", "pic4.jpg", "pic5.jpg"];
  return (
    <div>
      <h1>Welcome!</h1>
      {nameArr.map((str) => {
        return <Headline name={str} />;
      })}
      {picArr.map((pic) => {
        return <DisplayImg src={`images/${pic}`} />;
      })}
    </div>
  );
}
export default Home;
