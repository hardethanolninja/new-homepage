export default function Home() {
  return (
    <main className='relative grid grid-cols-2 gap-4'>
      <section className='fixed top-0 w-2/5 h-screen pr-12 ml-8 mt-28'>
        <div className='flex flex-col h-screen mt-28'>
          <h1 className='mb-4 text-5xl'>Hello! I'm Jon.</h1>
          <h2 className='mb-4 text-2xl'>I write code and develop websites.</h2>
          <p className='mb-4 text-wrap'>
            I'm a software engineer located in San Antonio, Texas specializing
            in building (and occasionally designing) exceptional digital
            experiences.
          </p>
          <div className='flex justify-center'>
            <button class='bg-dark-blue hover:bg-dark-green text-white font-bold py-2 px-4 rounded w-fit '>
              Let's work together!
            </button>
          </div>
        </div>
      </section>
      <section className='absolute right-0 w-3/5 mr-2 mt-28'>
        <div className='h-screen'>This is the hero area</div>
        <div className='h-screen rounded-md bg-dark-blue'>
          this is the about me area
        </div>
        <div className='h-screen'>skills area</div>
        <div className='h-screen rounded-md bg-dark-green'>work history</div>
        <div className='h-screen'>selected projects</div>
      </section>
    </main>
  );
}
