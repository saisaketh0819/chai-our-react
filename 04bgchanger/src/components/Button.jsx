import React from 'react';

function Button({ codecolor, setColor,textcolor = "white"}) {
  return (
    <button
      onClick={() => setColor(codecolor)}
      className={`outline-none px-4 py-1 rounded-full text-${textcolor} shadow-lg`}
      style={{ backgroundColor: codecolor }}
    >
      {codecolor}
    </button>
  );
}

export default Button;
