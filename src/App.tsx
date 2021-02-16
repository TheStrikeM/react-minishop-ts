import React from 'react';
import './app.scss';
import gsap, {Bounce} from 'gsap';

function App() {

  let images: any = React.useRef(null)
  const tl = gsap.timeline({ defaults: { duration: 1 }})
  const block = gsap.to('.block', {
    duration: 4,
    x: 1200,
    rotate: 360, 
    ease: Bounce.easeOut,
    paused: true
  });

  React.useEffect(() => {
    tl.from('.block', {x: -100, y: -100, opacity: 0, rotate: 360, ease: Bounce.easeOut})
  }, [])

  return (
    <div className="app">
      <div className="block"></div>
      <div className="buttons">
        <div onClick={() => block.play()} className="buttons__item">Старт</div>
        <div onClick={() => block.pause()} className="buttons__item">Пауза</div>
        <div onClick={() => block.resume()} className="buttons__item">Продолжить</div>
        <div onClick={() => block.restart()} className="buttons__item">Рестарт</div>
        <div onClick={() => block.reverse()} className="buttons__item">Наоборот</div>
      </div>
    </div>
  );
}

export default App;
