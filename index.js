const Button = (props) => {
  const { className, text } = props;

  return <button className={`button ${className}`}>{text}</button>;
};
//  Write your code here.

const element = (
  <div className="main-container">
    <div className="inner-container">
      <h1 className="heading">Social Buttons </h1>
      <div className="buttons-container">
        <Button className="like-button" text="Like" />
        <Button className="comment-button" text="comment" />
        <Button className="share-button" text="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
