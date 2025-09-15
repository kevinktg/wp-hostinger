import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='overflow-hidden relative min-h-screen bg-black'>
        <div className='absolute inset-0 w-full h-full'>
          <Image
            src='/images/header/stars.webp'
            alt='Starry Night Background'
            fill
            className='object-cover'
            priority={true}
          />
          {/* Smooth gradient overlay to blend stars naturally */}
          <div className='absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-30% via-[#2b061e]/20 via-60% to-black/95 to-100%'></div>
        </div>
        <div className='container max-w-[87.5rem] mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-[17.375rem] relative z-30'>
          <div className='relative text-white dark:text-white text-center md:text-start z-40'>
            <p className='text-inherit text-lg font-medium'>Palm springs, CA</p>
            <h1 className='text-inherit text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-[45%] mt-4 mb-6' style={{ fontFamily: 'var(--font-playfair)' }}>
              Luxury & Humble
            </h1>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4'>
              <Link href="/contactus" className='px-8 py-4 border border-[#bfa77a] bg-[#bfa77a] text-[#212224] hover:bg-transparent hover:text-[#bfa77a] duration-300 text-base font-semibold rounded-full hover:cursor-pointer'>
                Get in touch
              </Link>
              <button className='px-8 py-4 border border-[#bfa77a] bg-transparent text-[#bfa77a] hover:bg-[#bfa77a] hover:text-[#212224] duration-300 text-base font-semibold rounded-full hover:cursor-pointer'>
                View Details
              </button>
            </div>
          </div>
          {/* House image positioned to connect with property details */}
          <div className='hidden md:block absolute top-0 -right-[17.375rem] z-10'>
            <Image
              src={'/images/hero/heroBanner.png'}
              alt='Luxury & Humble - Premium Property'
              width={1082}
              height={1016}
              priority={true}
              unoptimized={true}
              className="object-contain"
            />
          </div>
        </div>
        <div className='md:absolute bottom-0 md:-right-[17.375rem] xl:right-0 bg-[#ececec] dark:bg-[#2b061e] py-12 px-8 md:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl md:mt-0 mt-24 z-20'>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-[#ececec] text-black'>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/sofa.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-sofa.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                4 Bedrooms
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/tube.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-tube.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                4 Restroom
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/parking.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-parking.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Parking space
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <p className='text-sm sm:text-base font-normal text-black/50 dark:text-[#ececec]/70'>
                Premium Property
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
