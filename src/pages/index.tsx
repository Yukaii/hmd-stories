import cx from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import useIsInViewport from 'use-is-in-viewport';

import useScrollPosition from '@/lib/hooks/useScrollPosition';

import Logo from '@/components/HMDLogo';
import Story from '@/components/Story';

const Navbar = () => {
  return (
    <div
      className='sticky top-0 flex justify-between px-4 py-4 sm:px-7.5'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.51)' }}
    >
      <Logo className='text-xl' />

      <div className='text-5 flex items-center'>
        <a
          href='https://hackmd.io/login'
          className='text-white'
          target='_blank'
          rel='noreferrer'
        >
          Login
        </a>
      </div>
    </div>
  );
};

const textClipStyle: React.StyleHTMLAttributes<HTMLDivElement>['style'] = {
  backgroundImage:
    'linear-gradient(104.64deg, #7838FF 2.07%, #FF4689 51.57%, #FFEE54 96.29%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const mdStoriesTextStyle: React.StyleHTMLAttributes<HTMLDivElement>['style'] = {
  ...textClipStyle,
  WebkitTextStroke: '2px transparent',
  WebkitTextFillColor: 'black',
  fontSize: 231,
  lineHeight: '242px',
  letterSpacing: -10,
};

const MD_TEXT_ROW_NUM = 7;
const mdRowMapper = new Array(MD_TEXT_ROW_NUM).fill(0);

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
        className='rounded-full border-8 border-solid border-black-default'
      />
    </div>
  );
};

const BackgroundEllipse = ({
  style,
  className,
  background,
  opacity,
}: {
  style?: React.StyleHTMLAttributes<HTMLDivElement>['style'];
  className?: string;
  background: string;
  opacity: number;
}) => {
  return (
    <div
      className={cx('block', className)}
      style={{
        background,
        opacity,
        ...style,
      }}
    ></div>
  );
};

export default function Home() {
  const pageY = useScrollPosition();

  const movement = useMemo(() => {
    if (typeof window === 'undefined') {
      return 0;
    }

    if (window?.document?.body?.offsetHeight) {
      return (pageY / document.body.offsetHeight) * 330;
    } else {
      return 0;
    }
  }, [pageY]);

  const [isInViewport, targetRef] = useIsInViewport();
  const [slideIn, setSlideIn] = useState(false);
  useEffect(() => {
    if (isInViewport) {
      setSlideIn(true);
    }
  }, [isInViewport]);

  return (
    <div className='overflow-x-hidden bg-black-default font-sourceSans text-white'>
      <Navbar />

      <section
        className='relative flex origin-center flex-col items-center pt-24'
        style={{
          // height: 'calc(100vh - 60px)',
          backgroundImage: 'url(/images/bg-1.png)',
        }}
      >
        <BackgroundEllipse
          background='radial-gradient(50% 50% at 50% 50%, rgba(27, 63, 156, 0.56) 0%, rgba(27, 63, 156, 0) 100%)'
          opacity={0.91}
          style={{
            width: '40vw',
            height: '60vh',
            transform: 'translate(-80%, -10%)',
          }}
          className='left absolute'
        />

        <BackgroundEllipse
          background='radial-gradient(50% 50% at 50% 50%, rgba(156, 27, 58, 0.56) 0%, rgba(142, 21, 101, 0) 100%)'
          opacity={0.56}
          style={{
            width: '40vw',
            height: '60vh',
            transform: 'translate(-80%, -10%)',
          }}
          className='left absolute'
        />

        <div className='z-10 flex flex-col items-center justify-center'>
          <Logo className='text-3xl' />

          <h1 className='mt-4.5 mb-1 select-none font-sourceSans text-[10vw] sm:text-[10vw] md:text-7xl lg:text-8xl'>
            隆重推出 &nbsp;
            <span
              className='bg-clip-text'
              style={{
                ...textClipStyle,
              }}
            >
              MD Stories
            </span>
          </h1>

          <h3 className='mt-3 mb-0 text-lg font-normal text-white opacity-70 md:text-2xl '>
            這是一段神奇的文字
          </h3>

          <a style={textClipStyle} className='mt-12 mb-20'>
            霹靂卡霹靂拉拉波波力那貝貝魯多
            <i className='fa fa-angle-right ml-0.5' aria-hidden='true' />
          </a>
        </div>

        <img
          className='z-10 h-auto w-full max-w-screen-lg'
          src='/images/screenshot.png'
        />
      </section>

      <section className='pt-10 pb-12 md:pb-48'>
        <div className='mx-auto flex max-w-screen-md flex-col md:flex-row'>
          <div
            className='relative flex-1 origin-top-right px-3.5'
            style={{ transform: 'translateX(-30%)' }}
          >
            <Avatar
              src='/images/avatar-1.png'
              className='absolute top-0 right-0 scale-95'
            />

            <Avatar
              src='/images/avatar-2.png'
              className='absolute top-0 right-0 -translate-x-32 translate-y-28 scale-110'
            />

            <Avatar
              src='/images/avatar-3.png'
              className='absolute top-0 right-0 translate-x-6 translate-y-52 scale-110'
            />
          </div>

          <div className='flex-1 px-3.5 pt-96 md:pt-3.5'>
            <h1 className='mt-0 mb-4 text-4xl md:text-6xl'>這是標題</h1>
            <h2 className='text-2xl md:text-3xl'>這是一段神奇的文字</h2>

            <p>
              這是一段神奇的文字是副標這是一段神奇的文字是副標這是一段神奇的文字是副標這是一段神奇的文字是副標
            </p>
          </div>
        </div>
      </section>

      <section className='relative mx-auto max-w-screen-lg pb-20'>
        <div
          className='flex flex-col md:flex-row md:items-center'
          ref={targetRef}
        >
          <div className='flex-1 px-3.5 md:pt-3.5'>
            <h1 className='mt-0 mb-4 text-4xl md:text-6xl'>這是標題</h1>
            <h2 className='text-2xl md:text-3xl'>這是一段神奇的文字</h2>

            <p>
              這是一段神奇的文字是副標這是一段神奇的文字是副標這是一段神奇的文字是副標這是一段神奇的文字是副標
            </p>
          </div>

          <div
            className='relative flex-1 transition-transform duration-300 ease-in-out'
            style={{
              maxWidth: '50%',
              transform: `translateX(${slideIn ? '0' : '150%'})`,
            }}
          >
            <div
              className='flex flex-nowrap items-center'
              style={{ gap: '5%' }}
            >
              <Story
                markdown={`隱藏在黑暗力量的鑰匙啊，\n在我面前顯示你真正的力量！`}
                width={255}
                height={388}
                className='rounded-2xl bg-cover bg-center px-8 text-base'
                style={{
                  boxShadow: '0px 16px 32px rgba(255, 58, 94, 0.25)',
                  backgroundImage: 'url(/images/card_bg_sample.png)',
                }}
              />

              <Story
                markdown={`隱藏在黑暗力量的鑰匙啊，\n在我面前顯示你真正的力量！`}
                width={190}
                height={315}
                className='rounded-2xl bg-cover bg-center px-8 text-base'
                style={{
                  boxShadow: '0px 16px 32px rgba(255, 58, 94, 0.25)',
                }}
              />

              <Story
                markdown=''
                width={190}
                height={315}
                className='rounded-2xl bg-cover bg-center px-8 text-base'
                style={{
                  boxShadow: '0px 16px 32px rgba(255, 58, 94, 0.25)',
                  opacity: 0.3,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className='relative flex flex-col items-center justify-center px-4 py-36'
        style={{ minHeight: 520 }}
      >
        {/* here's where magical things live */}
        <div className='absolute top-0 left-0 h-full w-full select-none overflow-hidden whitespace-nowrap font-sourceSans'>
          <div
            style={{
              transform: `translateX(calc(${movement}px - 50%))`,
            }}
          >
            {mdRowMapper.map((_, i) => (
              <span
                key={`row-1-${i}`}
                className='mr-4'
                style={{
                  ...mdStoriesTextStyle,
                }}
              >
                MD Stories
              </span>
            ))}
          </div>

          <div
            style={{
              transform: `translateX(calc(-${movement}px - 50%))`,
            }}
          >
            {mdRowMapper.map((_, i) => (
              <span
                key={`row-2-${i}`}
                className='mr-4'
                style={{
                  ...mdStoriesTextStyle,
                }}
              >
                MD Stories
              </span>
            ))}
          </div>

          <div
            style={{
              transform: `translateX(calc(${movement}px - 50%))`,
            }}
          >
            {mdRowMapper.map((_, i) => (
              <span
                key={`row-3-${i}`}
                className='mr-4'
                style={{
                  ...mdStoriesTextStyle,
                }}
              >
                MD Stories
              </span>
            ))}
          </div>
        </div>

        {/* The card */}
        <div
          className='z-10 w-full max-w-screen-md flex-1 rounded-lg px-15 pb-15 text-center'
          style={{
            background:
              'linear-gradient(120.15deg, rgba(253, 0, 182, 0.16) 9.37%, rgba(43, 26, 145, 0.16) 96.78%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <h2 className='text-6xl'>全新打造</h2>

          <p>這是一段神奇的文字是副標</p>
        </div>
      </section>

      <footer></footer>
    </div>
  );
}
