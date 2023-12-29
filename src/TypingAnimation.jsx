import { TypeAnimation } from 'react-type-animation';

const Words = () => {
  return (
    <div>
    <TypeAnimation
      sequence={[
        "Competitive Programmer",
        1000,
        "Developer",
        1000,
        "Open Source Contributor",
        1000,
      ]}
      speed={10}
      repeat={Infinity}
      style={{ fontSize: '2em',color:'violet' }}
    />
  </div>
  );
};

export default Words;