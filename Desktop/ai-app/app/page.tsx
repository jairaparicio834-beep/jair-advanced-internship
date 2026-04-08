import AuthModal from "@/components/modals/AuthModal";
// import './/landing.css'
export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      < nav className="px-[30px] h-[76px] flex justify-between items-center sticky top-0 z-[999] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.1)]" >
        <a href="#">
          <img src="/assets/logo-dark.png" alt="" className="h-[40px]" />
        </a>
        <div className="hidden lg:flex gap-4">
          <a href="#" className="text-[14px] py-[7px] px-[14px] text-[#070707] font-semibold rounded-lg transition-all duration-300 hover:bg-black/5 cursor-not-allowed">About</a>
          <a href="#" className="text-[14px] py-[7px] px-[14px] text-[#070707] font-semibold rounded-lg transition-all duration-300 hover:bg-black/5 cursor-not-allowed">Features</a>
          <a href="#" className="text-[14px] py-[7px] px-[14px] text-[#070707] font-semibold rounded-lg transition-all duration-300 hover:bg-black/5 cursor-not-allowed">How it works</a>
          <a href="#" className="text-[14px] py-[7px] px-[14px] text-[#070707] font-semibold rounded-lg transition-all duration-300 hover:bg-black/5 cursor-not-allowed">Privacy policy</a>
        </div>
        <AuthModal />
      </nav >

      {/* Hero */}
      < header className="relative h-[90vh] flex items-center py-[208px]"
        style={{
          background: 'linear-gradient(120deg, #70acd4 0%, #ca71ff 20%, #8469cc 30%, #4882e6 50%, #8469cc 70%, #70acd4 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-animation 20s ease-in-out alternate infinite'
        }
        }>
        <style>{`
          @keyframes gradient-animation {
            0% { background-position: 0% 100%; }
            100% { background-position: 100% 100%; }
          }
        `}</style>
        <div className="max-w-[1280px] mx-auto px-5 w-full flex flex-col justify-center items-center">
          <div className="py-[5px] px-[13px] pb-[3px] bg-white/15 rounded-[20px] text-[10px] leading-[11px] font-bold flex items-center gap-[6px] mb-8">
            <span className="text-white">Meet HollywoodAI</span>
            <span className="text-[6px]">⏺</span>
            <span className="text-[#e5e6e6] opacity-60">Unleash the Power of AI</span>
          </div>
          <h1 className="text-[84px] font-bold tracking-[-2.1px] leading-[77px] text-center text-white mb-7 max-sm:text-[52px] max-sm:leading-[50px] max-[640px]:text-[68px]">
            Ultimate AI <br />
            Summariser
            <img src="/assets/bolt.svg" alt="" className="translate-y-1 inline-block max-sm:hidden" />
          </h1>
          <p className="text-[20px] font-medium leading-[25px] max-w-[480px] w-full opacity-75 text-[rgb(229,230,230)] text-center mb-5">
            All-in-one platform to watch your favourite movies in minutes using AI.
          </p>
          <a className="py-3 px-4 font-semibold bg-black/10 flex justify-center items-center text-[17px] leading-5 gap-4 rounded-[48px] h-16 cursor-pointer transition-all duration-300 hover:bg-black/20">
            <div className="w-10 h-10 p-3 rounded-full bg-white text-[rgb(55,57,61)] text-[10px] flex justify-center items-center">
              <i className="fa-solid fa-play w-4 h-4 text-[12px] flex justify-center items-center"></i>
            </div>
            <span className="text-white">See how it works &nbsp;</span>
          </a>
        </div>
        <svg className="absolute left-0 right-0 bottom-[-2px] h-auto w-full block fill-[#f9f9fb]" width="1440" height="105" viewBox="0 0 1440 105" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0C240 68.7147 480 103.072 720 103.072C960 103.072 1200 68.7147 1440 0V104.113H0V0Z"></path>
        </svg>
      </header >

      {/* Features */}
      < section id="features" className="mt-10" >
        <div className="py-[60px]">
          <div className="max-w-[1280px] mx-auto px-5 flex flex-col items-center">
            <h1 className="text-[53px] font-bold tracking-[-1.59px] mb-5 text-center max-[480px]:text-[44px] max-[480px]:leading-[50px]">
              The future of AI.
            </h1>
            <p className="text-[18px] leading-[1.27em] text-center text-[#3c4b62] mb-10 max-w-[500px] w-full font-normal max-[480px]:text-[16px]">
              HollywoodAI is designed to help you enjoy high-quality summaries instantly, without breaking a sweat.
            </p>
            <div className="flex flex-wrap w-full">
              {[
                { icon: 'fa-pen', title: 'AI Generated Summaries', para: "Save time with summaries of the world's best movies." },
                { icon: 'fa-regular fa-circle-play', title: 'Read or Listen', para: 'Switch between reading and listening modes seamlessly.' },
                { icon: 'fa-bars-staggered', title: 'Find Your Next Flick', para: 'Explore our movie lists and personalized recommendations.' },
                { icon: 'fa-mobile', title: 'Multi Platform Access', para: 'Enjoy your favourite movies on any device.' },
                { icon: 'fa-shield', title: 'Payment Gateways', para: 'We securely process all card payments.' },
                { icon: 'fa-hands-holding-circle', title: 'Eco-Friendly Option', para: 'HollywoodAI donates 10% of profits to charities.' },
              ].map((f, i) => (
                <div key={i} className="w-full sm:w-1/2 lg:w-1/3 p-[18px] flex gap-5 group">
                  <div className="flex-none w-11 h-11 text-[rgb(31,35,40)] bg-[rgb(242,242,242)] flex justify-center items-center rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1e2227] group-hover:text-white">
                    <i className={`fa-solid ${f.icon} w-4`}></i>
                  </div>
                  <div>
                    <h4 className="text-[#2c2e48] text-[17px] font-bold mb-3 tracking-[-0.5px]">{f.title}</h4>
                    <p className="text-[14px] leading-6 text-[rgba(44,46,72,0.6)]">{f.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* Summary */}
      < section id="summary" >
        <div className="py-[60px]">
          <div className="max-w-[1280px] mx-auto px-5">
            <div className="rounded-[50px] border border-[rgb(229,231,235)] p-[80px] flex justify-between max-md:flex-col max-md:gap-12 max-[480px]:p-[48px_16px] max-[480px]:rounded-[32px] max-[480px]:gap-5">
              <div className="w-[47%] max-md:w-full">
                <div className="bg-[#dde6ff] py-[5px] px-[13px] pb-[3px] rounded-[20px] text-[12px] leading-[11px] font-bold flex items-center gap-[6px] mb-[110px] w-fit max-md:mb-[60px] max-[480px]:mb-5">
                  <span className="text-[#1e2227]">The future of entertainment</span>
                  <span className="text-[6px] opacity-60">⏺</span>
                  <span className="opacity-60">AI</span>
                </div>
                <h2 className="text-[39px] font-bold text-[rgb(30,34,39)] tracking-[-1.17px] leading-[40.95px] mb-6 max-md:text-[32px] max-[480px]:mb-3">
                  Say goodbye to 2 hour movies.
                </h2>
                <p className="text-[17px] leading-[1.47em] text-[#7e7f8e] max-md:text-[15px] max-[480px]:text-[13px]">
                  HollywoodAI is designed to help you get high-quality summaries of your favourite movies instantly, without breaking a sweat. With our intuitive interface and powerful features, you can easily digest any movie in just minutes instead of hours.
                </p>
              </div>
              <figure className="w-[47%] max-md:w-full p-[30px] bg-[#dde6ff] rounded-xl flex flex-col items-center max-[480px]:p-4">
                <img src="/assets/summary.png" alt="" className="w-full h-auto rounded-xl" />
                <span className="text-[rgb(74,74,74)] text-[17px] font-bold tracking-[-0.17px] leading-[18.7px] mt-9 mb-2 text-center max-[480px]:hidden">
                  Search. Summarise. Repeat.
                </span>
                <span className="text-[rgb(74,74,74)] text-[12px] max-[480px]:hidden">
                  Powered by AI
                </span>
              </figure>
            </div>
          </div>
        </div>
      </section >

      {/* Steps */}
      < section id="steps" >
        <div className="py-[60px]">
          <div className="max-w-[1280px] mx-auto px-5">
            <div className="rounded-[50px] bg-[#010101] bg-cover py-24 px-10 text-[rgba(255,255,255,0.6)] flex flex-col items-center text-center max-[480px]:py-[60px] max-[480px]:px-5 max-md:mx-5"
              style={{ backgroundImage: 'url(/assets/steps-bg.jpg)' }}>
              <h2 className="text-[64px] text-[#e5e6e6] leading-none tracking-[-1.92px] max-w-[430px] w-full mb-14 max-[480px]:text-[40px] max-[480px]:mb-8">
                So, how does it work?
              </h2>
              <div className="flex relative max-md:flex-col max-md:gap-8">
                <div className="border-t border-[#ffffff1a] w-[70%] absolute left-1/2 -translate-x-1/2 translate-y-8 max-md:hidden"></div>
                {[
                  "Browse through our wide selection of the world's most popular movies",
                  "Simply select a movie you'd like to have summarised and let our AI algorithms do the rest.",
                  "Take a couple of minutes to read and listen to the summary. And you're done!"
                ].map((text, i) => (
                  <div key={i} className="flex flex-col items-center px-5 transition-all duration-[400ms] hover:-translate-y-3 group">
                    <div className="w-16 h-16 border-2 border-[rgba(255,255,255,0.17)] bg-[#010101] rounded-full flex justify-center items-center text-[20px] text-white mb-10 relative z-[2] transition-all duration-[400ms] group-hover:bg-white group-hover:text-[#010101] group-hover:scale-110 max-[480px]:w-[52px] max-[480px]:h-[52px] max-md:mb-5">
                      <span>{i + 1}</span>
                    </div>
                    <p className="text-[18px] font-medium leading-6 max-w-[280px] w-full max-md:max-w-full max-[480px]:text-[14px]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Testimonials */}
      < section id="testimonials" >
        <div className="py-[60px]">
          <div className="max-w-[1280px] mx-auto px-5">
            <div className="rounded-[50px] border border-[rgb(229,231,235)] p-[80px] flex flex-col items-center bg-[rgb(246,246,246)] bg-center bg-no-repeat bg-contain max-md:mx-5 max-[480px]:p-[60px_20px]"
              style={{ backgroundImage: 'url(/assets/world-map.png)' }}>
              <div className="bg-[#28027c1f] py-[5px] px-[13px] pb-[3px] rounded-[20px] text-[12px] leading-[11px] font-bold flex items-center gap-[6px] mb-5 w-fit text-[#28027c]">
                <span>Testimonials</span>
                <span className="text-[6px] opacity-60">⏺</span>
                <span className="opacity-60">TrustPilot</span>
              </div>
              <h2 className="text-[52px] mb-10 text-center max-[480px]:text-[40px] max-[480px]:mb-8">
                What our members say.
              </h2>
              <div className="flex gap-10 max-lg:flex-wrap max-lg:justify-center">
                {[
                  { img: '/assets/testimonial-1.png', name: 'Olivia Chapman', job: 'Student', para: '"Hollywood AI made big promises and delivered on them! Absolutely cannot live without this tool!"' },
                  { img: '/assets/testimonial-2.png', name: 'Eric Fisherman', job: 'Professor', para: '"Definitely worth the purchase if you are a busy person who stills want to keep up with the latest movies"' },
                  { img: '/assets/testimonial-3.png', name: 'Anisong Silkum', job: 'Student', para: '"The summaries provide a really great overview of the movies. It\'s also very easy to use. 5/5!"' },
                ].map((t, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <img src={t.img} alt="" className="w-[77px] h-[77px] mb-2" />
                    <span className="text-[15px] text-[#1e2227] font-bold">{t.name}</span>
                    <span className="text-[15px] text-black/20 font-medium">{t.job}</span>
                    <p className="mt-4 text-[14px] font-medium max-w-[280px] text-center">{t.para}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="mt-[120px] text-white"
        style={{ background: 'radial-gradient(circle at 0% -30%, #a12a91, rgba(33,13,123,0.83), transparent, transparent, transparent) black', backgroundColor: 'black' }}>
        <section id="cta">
          <svg className="fill-[#f9f9fb] w-full" preserveAspectRatio="none" width="1440" height="86" viewBox="0 0 1440 86" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 85.662C240 29.1253 480 0.857 720 0.857C960 0.857 1200 29.1253 1440 85.662V0H0V85.662Z"></path>
          </svg>
          <div className="py-[60px]">
            <div className="max-w-[1280px] mx-auto px-5 flex flex-col items-center">
              <p className="mb-9 text-[10px] font-semibold uppercase tracking-[1px] flex flex-col items-center gap-2 max-[480px]:flex-col max-[480px]:items-center max-[480px]:gap-2">
                <span className="py-1 px-3 bg-[rgb(38,38,38)] rounded-xl mr-2">HollywoodAI</span>
                Endless benefits, one subscription.
              </p>
              <h2 className="text-[100px] max-w-[569px] w-full leading-[100px] text-center mb-8 max-[640px]:text-[92px] max-[480px]:text-[56px] max-[480px]:leading-none">
                Start your free trial.
              </h2>
              <p className="text-[20px] font-normal leading-[25px] opacity-50 max-w-[440px] w-full text-center mb-9 max-[480px]:px-5">
                Enjoy your favourite movies in minutes by letting AI do the work for you.
              </p>
              <button className="flex items-center justify-center gap-3 text-white rounded-xl py-4 px-7 font-semibold bg-[#1a1a1a] border-none transition-all duration-300 hover:scale-110">
                <span>Join HollywoodAI</span>
                <img src="/assets/bolt.svg" alt="" className="w-[14px] h-auto" />
              </button>
            </div>
          </div>
        </section>

        <section id="links" className="w-full border-t border-b border-[#ffffff1f]">
          <div className="flex justify-between items-center max-w-[1280px] mx-auto py-8 px-5 max-[640px]:flex-col max-[640px]:items-center max-[640px]:gap-7">
            <img src="/assets/logo-light.png" alt="" className="w-[132px]" />
            <div className="flex gap-[30px] max-[640px]:flex-wrap max-[640px]:justify-center">
              {['instagram', 'twitter', 'facebook', 'tiktok'].map((s) => (
                <a key={s} className="text-white text-[14px] flex items-center cursor-not-allowed" href="#">
                  <i className={`fa-brands fa-${s} w-[14px] mr-3`}></i>
                  <span className="capitalize">{s}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="copyright">
          <div className="flex justify-between items-center max-w-[1280px] mx-auto py-8 px-5 max-md:flex-col max-md:gap-6">
            <div className="flex gap-3 max-md:flex-col">
              <input type="text" className="py-5 px-7 bg-white/5 rounded-lg outline-none border-none text-[16px] text-white w-full text-center md:text-left"
                placeholder="Enter your email" />
              <button type="button" className="py-[18px] px-[30px] text-[15px] font-bold text-white bg-white/5 border-none rounded-lg w-full cursor-not-allowed">
                Subscribe
              </button>
            </div>
            <span className="text-[#e5e6e6] text-[14px]">
              2024 Copyright © Hollywood AI
            </span>
          </div>
        </section>
      </footer >
    </>
  );
}
