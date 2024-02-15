import './introPage.scss';
import { useRef, useEffect, useState } from "react";

function IntroPage() {
  const mainName = useRef(null);
  const text = useRef(null);
  const walk = 10;
  const [textShadow, setTextShadow] = useState("0 0 0 rgba(189, 184, 184, 0.7)");

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = mainName.current;
    const x = e.pageX;
    const y = e.pageY;
    const xWalk = ((x / width) * walk) - walk / 2;
    const yWalk = ((y / height) * walk) - walk / 2;
    console.log(xWalk, yWalk);
    const newShadow = `${xWalk}px ${yWalk}px 0 rgba(189, 184, 184, 0.7)`;
    setTextShadow(newShadow);
  }

    useEffect(() => {
      if (mainName.current) {
        document.addEventListener('mousemove', shadow);
  
        return () => {
          document.removeEventListener('mousemove', shadow);
        };
      }
    }, []);

  

  return (
    <>

<div className='Introduction'>
      <div className='introInfo'>

      <div className="mainName" ref={mainName}>
<p>Hiya ya'll</p>
        <h1 ref={text} style={{ textShadow }} className= "Arsh">Arsh Bakhshi</h1>
 <o>Welcome to my site!</o>
      </div>
      </div>

</div>
    </>
  );
}

export default IntroPage;