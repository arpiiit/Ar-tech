import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className=' self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 font-serif py-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 rounded-md text-white'>
                Arpit's
              </span>
              <span className='italic font-serif'>TechBlog</span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://arpiitportfolio.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Portfolio Profile
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Arpit's TechBlog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/arpiiit'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='https://www.linkedin.com/in/arpit-mishra-7a4588202/'>Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='/'
            by="Arpit's TechBlog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon target='_blank' href='https://www.facebook.com/profile.php?id=100050830013888' icon={BsFacebook}/>
            <Footer.Icon target='_blank' href='https://www.instagram.com/_arpiit.mishra_/' icon={BsInstagram}/>
            <Footer.Icon target='_blank' href='https://twitter.com/ArpitMi71703662' icon={BsTwitter}/>
            <Footer.Icon target='_blank' href='https://github.com/arpiiit' icon={BsGithub}/>
            <Footer.Icon target='_blank' href='https://www.linkedin.com/in/arpit-mishra-7a4588202/' icon={BsLinkedin}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}