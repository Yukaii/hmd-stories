import React from 'react';
import cx from 'classnames';
import Logo from '../components/HMDLogo.tsx';

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

const igAvatar = {
  backgroundImage: `linear-gradient(
		45deg,
		#ffa95f 5%,
		#f99c4a 15%,
		#f47838 30%,
		#e75157 45%,
		#d92d7a 70%,
		#cc2a92 80%,
		#c32e92 95%
	)`,
  width: 115,
  height: 115,
};

const Avatar = ({
  className,
  style,
  src,
}: {
  src: string;
  className?: string;
  style?: React.StyleHTMLAttributes<HTMLDivElement>['style'];
}) => {
  return (
    <div
      style={{
        ...igAvatar,
        ...style,
      }}
      className={cx('flex items-center justify-center rounded-full', className)}
    >
      <img
        src={src}
        style={{ width: 95 }}
        className="border-8 border-solid rounded-full border-black-default"
      />
    </div>
  );
};

const BackgroundEllipseOne = ({
  style,
  className,
}: {
  style?: React.StyleHTMLAttributes<HTMLDivElement>['style'];
  className?: string;
}) => {
  return (
    <div
      className={cx('block', className)}
      style={{
        background:
          'radial-gradient(50% 50% at 50% 50%, rgba(27, 63, 156, 0.56) 0%, rgba(27, 63, 156, 0) 100%)',
        opacity: 0.91,
        ...style,
      }}
    ></div>
  );
};

const BackgroundEllipseTwo = ({
  style,
  className,
}: {
  style: React.StyleHTMLAttributes<HTMLDivElement>['style'];
  className?: string;
}) => {
  return (
    <div
      className={cx('block', className)}
      style={{
        background:
          'radial-gradient(50% 50% at 50% 50%, rgba(156, 27, 58, 0.56) 0%, rgba(142, 21, 101, 0) 100%)',
        opacity: 0.56,
        ...style,
      }}
    ></div>
  );
};

export default function Home() {
  return (
    <div className="overflow-x-hidden text-white bg-black-default">
      <Navbar />

      <section
        className="relative flex flex-col items-center pt-24 origin-center"
        style={{
          // height: 'calc(100vh - 60px)',
          backgroundImage: 'url(/images/bg-1.png)',
        }}
      >
        <BackgroundEllipseOne
          style={{
            width: '40vw',
            height: '60vh',
            transform: 'translate(-80%, -10%)',
          }}
          className="absolute left"
        />

        <BackgroundEllipseTwo
          style={{
            width: '60vw',
            height: '60vh',
            transform: 'translate(60%, -30%)',
          }}
          className="absolute left"
        />

        <div className="z-10 flex flex-col items-center justify-center">
          <Logo className="text-3xl" />

          <h1 className="select-none font-sourceSans text-[10vw] sm:text-[10vw] md:text-7xl lg:text-8xl mt-4.5 mb-1">
            隆重推出 &nbsp;
            <span
              className="bg-clip-text"
              style={{
                ...textClipStyle,
              }}
            >
              MD Stories
            </span>
          </h1>

          <h3 className="mt-3 mb-0 text-lg font-normal text-white md:text-2xl opacity-70 ">
            這是一段神奇的文字
          </h3>

          <a style={textClipStyle} className="mt-12 mb-20">
            霹靂卡霹靂拉拉波波力那貝貝魯多
            <i className="fa fa-angle-right ml-0.5" aria-hidden="true" />
          </a>
        </div>

        <img
          className="z-10 w-full h-auto max-w-screen-lg"
          src="/images/screenshot.png"
        />
      </section>

      <section className="pt-10 pb-48">
        <div className="flex flex-col max-w-screen-md mx-auto md:flex-row">
          <div className="flex-1 px-3.5 relative origin-top-right" style={{ transform: 'translateX(-30%)' }}>
            <Avatar
              src="/images/avatar-1.png"
              className="absolute top-0 right-0 scale-95"
            />

            <Avatar src="/images/avatar-2.png" className='absolute top-0 right-0 scale-110 -translate-x-32 translate-y-28' />

            <Avatar src="/images/avatar-3.png" className='absolute top-0 right-0 scale-110 translate-x-6 translate-y-52' />
          </div>

          <div className="flex-1 px-3.5 pt-96 md:pt-3.5">
            <h1 className="mt-0 mb-4 text-4xl md:text-6xl">這是標題</h1>
            <h2 className="text-2xl md:text-3xl">這是一段神奇的文字</h2>

            <p>
              這是一段神奇的文字是副標這是一段神奇的文字是副標這是一段神奇的文字是副標這是一段神奇的文字是副標
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
