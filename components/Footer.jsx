function Footer() {
  return (
    <footer className='my-12 overflow-hidden w-m-screen'>
      <div className='border-t-4 border-dark-blue'>
        <div className='flex items-center justify-between p-3 border-t-4 border-dark-green'></div>
        <div className='container flex justify-center mx-auto'>
          <a
            href='mailto:your@email.com'
            className='mx-4 text-dark-green hover:text-blue-500'
          >
            Email
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/jonathan-lienhard/'
            className='mx-4 hover:text-blue-500 text-dark-green'
          >
            LinkedIn
          </a>
          <a
            target='_blank'
            href='https://github.com/hardethanolninja/'
            className='mx-4 hover:text-blue-500 text-dark-green'
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
