import cx from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useMemo, useState } from 'react';
import useIsInViewport from 'use-is-in-viewport';

import useScrollPosition from '@/lib/hooks/useScrollPosition';

import Logo from '@/components/HMDLogo';
import Story from '@/components/Story';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <div
      className='sticky top-0 flex justify-between px-4 py-4 sm:px-7.5'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.51)' }}
    >
      <Head>
        <title>{t('title')} | HackMD</title>
      </Head>

      <Logo className='text-xl' />

      <div className='text-5 flex items-center'>
        <span className='mr-4 text-white visited:text-white hover:text-gray-200'>
          <Link href='/' locale='en'>
            <a className='underline'>En</a>
          </Link>
          &nbsp;/&nbsp;
          <Link href='/' locale='zh-TW'>
            <a className='underline'>中</a>
          </Link>
        </span>

        <a
          href='https://hackmd.io/login'
          className='text-white'
          target='_blank'
          rel='noreferrer'
        >
          {t('login')}
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
        style={{ width: 110 }}
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
  const { t } = useTranslation('common');
  const { locale } = useRouter();
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
    <div className='overflow-x-hidden bg-black-default text-white'>
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

          <h1
            className={cx(
              'mt-4.5 mb-1 select-none font-sourceSans text-[10vw] font-semibold sm:text-[10vw] md:text-7xl lg:text-8xl',
              {
                ['mx-auto max-w-screen-md']: locale === 'en',
              }
            )}
          >
            {t('landing.introducing')}
            &nbsp;
            <span
              className='bg-clip-text font-sourceSans'
              style={{
                ...textClipStyle,
              }}
            >
              MD Stories
            </span>
          </h1>

          <h3 className='mt-3 mb-0 text-lg font-normal text-white opacity-70 md:text-2xl'>
            {t('landing.subtitle')}
          </h3>

          <Link href='/stories'>
            <a
              style={textClipStyle}
              className='mt-12 mb-20 cursor-pointer hover:underline'
            >
              {t('landing.cta-1')}
              <i className='fa fa-angle-right ml-0.5' aria-hidden='true' />
            </a>
          </Link>
        </div>

        <Image
          className='z-10 h-auto w-full max-w-screen-lg'
          src='/images/Banner-screenshort.png'
          alt='MD Stories'
          width={1155}
          height={437}
          quality={100}
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
            <h1 className='mt-0 mb-4 text-4xl md:text-5xl'>
              {t('landing.section-1.title')}
            </h1>
            <h2 className='mb-10 text-2xl'>
              {t('landing.section-1.subtitle')}
            </h2>

            <p className='text-lg'>{t('landing.section-1.description')}</p>
          </div>
        </div>
      </section>

      <section className='relative mx-auto max-w-screen-lg pb-24'>
        <div className='flex flex-col-reverse md:flex-row' ref={targetRef}>
          <div className='flex-1 px-3.5 pt-100 md:pt-24'>
            <h1 className='mt-0 mb-4 text-4xl md:text-5xl'>
              {t('landing.section-2.title')}
            </h1>

            <h2 className='mb-10 text-2xl'>
              {t('landing.section-2.subtitle')}
            </h2>

            <p className='text-lg'>{t('landing.section-2.description')}</p>
          </div>

          <div className='flex-1'>
            <div className='relative h-full w-full'>
              <div
                className='absolute grid w-auto grid-cols-3 grid-rows-1 items-center gap-3'
                style={{
                  minWidth: 900,
                }}
              >
                <Story
                  width={255}
                  height={388}
                  className='whitespace-pre-wrap rounded-2xl bg-cover bg-center px-8 text-base'
                  style={{
                    boxShadow: '0px 16px 32px rgba(255, 58, 94, 0.25)',
                    backgroundImage: 'url(/images/card_bg_sample.png)',
                  }}
                >
                  隱藏在黑暗力量的鑰匙啊， 在我面前顯示你真正的力量！
                </Story>

                <Story
                  width={255}
                  height={388}
                  className='whitespace-pre-wrap rounded-2xl bg-cover bg-center px-8 text-base'
                  style={{
                    boxShadow: '0px 16px 32px rgba(255, 58, 94, 0.25)',
                    transform: 'scale(0.8)',
                  }}
                >
                  隱藏在黑暗力量的鑰匙啊， 在我面前顯示你真正的力量！
                </Story>

                <Story
                  width={255}
                  height={388}
                  className='whitespace-pre-wrap rounded-2xl bg-cover bg-center px-8 text-base'
                  style={{
                    boxShadow: '0px 16px 32px rgba(255, 58, 94, 0.25)',
                    transform: 'scale(0.8)',
                  }}
                >
                  隱藏在黑暗力量的鑰匙啊， 在我面前顯示你真正的力量！
                </Story>
              </div>
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
          className='z-10 flex w-full max-w-screen-md flex-1 flex-col items-center justify-center rounded-lg px-15 pt-15 pb-15 text-center'
          style={{
            background:
              'linear-gradient(120.15deg, rgba(253, 0, 182, 0.16) 9.37%, rgba(43, 26, 145, 0.16) 96.78%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <h2 className='mb-6 text-6xl'>{t('landing.section-3.title')}</h2>

          <p className='mb-8 text-xl'>{t('landing.section-3.subtitle')}</p>

          <Link href='/stories'>
            <a
              className='px-12 py-4'
              style={{
                background:
                  'linear-gradient(101.03deg, #FFD336 -4.74%, #FF208B 99.86%)',
                boxShadow: '0px 12px 24px rgba(255, 94, 44, 0.32)',
                borderRadius: 13,
              }}
            >
              {t('landing.section-3.cta')}
            </a>
          </Link>
        </div>
      </section>

      <footer></footer>
    </div>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
