export function Test() {
  return (
    <>
      <h1>Test Title</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2"></circle>
      </svg>
      <form>
        <input type="text"></input>
      </form>
    </>
  );
}

//Property (Prop) Destructing with default values + function (passed by reference)
function Button({
  text = "Click Me",
  color = "blue",
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
}

export function More() {
  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <>
      <Button></Button>
      <Button text="Don't Click Me" color="red"></Button>
      <Button
        fontSize={20}
        onClick={() => handleClick("https://www.theodinproject.com")}
      ></Button>
    </>
  );
}
