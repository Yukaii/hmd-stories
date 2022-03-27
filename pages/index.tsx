import React from 'react';
import Logo from '~/components/Logo.tsx';

const Navbar = () => {
  return (
    <div
      className="flex justify-between sm:px-7.5 px-4 py-4 sticky top-0"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.51)' }}
    >
      <Logo className="text-xl" />

      <div className="flex items-center text-5">
        <a
          href="https://hackmd.io/login"
          className="text-white"
          target="_blank"
        >
          Login
        </a>
      </div>
    </div>
  );
};

const textClipStyle = {
  backgroundImage:
    'linear-gradient(104.64deg, #7838FF 2.07%, #FF4689 51.57%, #FFEE54 96.29%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const BackgroundEllipseOne = (style: React.StyleHTMLAttributes<HTMLDivElement>) => {
  return <div style={{
    background: 'radial-gradient(50% 50% at 50% 50%, rgba(27, 63, 156, 0.56) 0%, rgba(27, 63, 156, 0) 100%)',
    opacity: 0.91,
    ...style
  }}>
  </div>
}

const BackgroundEllipseTwo = (style: React.StyleHTMLAttributes<HTMLDivElement>) => {
  return <div style={{
    background: 'radial-gradient(50% 50% at 50% 50%, rgba(156, 27, 58, 0.56) 0%, rgba(142, 21, 101, 0) 100%)',
    opacity: 0.56,
    ...style
  }}>
  </div>
}

export default function Home() {
  return (
    <div className="overflow-x-hidden text-white bg-black-default">
      <Navbar />

      <section
        className="relative flex flex-col items-center pt-24 origin-center"
        style={{ height: 'calc(100vh - 60px)', backgroundImage: 'url(/images/bg-1.png)' }}
      >
        <div className="flex flex-col items-center justify-center">
          <Logo className="text-2xl" />

          <h1 className="select-none font-sourceSans text-[10vw] sm:text-[10vw] md:text-7xl lg:text-8xl mt-4.5 mb-1">
            隆重推出 &nbsp;
            <span
              className="bg-clip-text"
              style={{
                ...textClipStyle
              }}
            >
              MD Stories
            </span>
          </h1>

          <h3 className="mt-3 mb-0 text-lg font-normal text-white md:text-2xl opacity-70 ">
            這是一段神奇的文字
          </h3>

          <a style={textClipStyle} className='mt-12 mb-20'>
            霹靂卡霹靂拉拉波波力那貝貝魯多
            <i className='fa fa-angle-right ml-0.5' aria-hidden='true' />
          </a>
        </div>

        <img className="w-full h-auto max-w-screen-md" src="/images/screenshot.png" />
      </section>
    </div>
  );
}
