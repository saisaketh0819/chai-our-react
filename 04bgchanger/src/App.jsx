import { useState } from "react"
import './index.css'; 
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">      
          <Button codecolor="Pink" setColor={setColor} />
          <Button codecolor="Olive" setColor={setColor} />
          <Button codecolor="Blue" setColor={setColor} />
          <Button codecolor="Red" setColor={setColor} />
          <Button codecolor="Green" setColor={setColor} />
          <Button codecolor="Purple" setColor={setColor} />
          <Button codecolor="Yellow" setColor={setColor} />
          <Button codecolor="Gray" setColor={setColor} />
          <Button codecolor="Black" setColor={setColor} />
          <Button codecolor="White" setColor={setColor} textcolor="black" />
          <Button codecolor="Orange" setColor={setColor} />
        </div>
      </div>
    </div>
  )
}

export default App