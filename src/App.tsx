import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import BrandLogo from './components/BrandLogo'

const frontendBase = import.meta.env.VITE_PENSQUIZ_FRONTEND_URL ?? 'http://localhost:5173'
const loginUrl = `${frontendBase}/login`
const registerUrl = `${frontendBase}/register`

const features = [
  {
    title: 'Take Quiz',
    description: 'Practice ready-made quizzes and improve your score quickly.',
    image: 'img_image_1.png',
    href: loginUrl,
  },
  {
    title: 'Make Quiz',
    description: 'Create your own quizzes and share them with classmates.',
    image: 'img_image_2.png',
    href: loginUrl,
  },
  {
    title: 'See Courses',
    description: 'Explore courses, materials, and learning paths for every major.',
    image: 'img_image_3.png',
    href: loginUrl,
  },
]

const reviews = [
  { initial: 'A', major: 'Informatics Eng. Major' },
  { initial: 'N', major: 'Informatics Eng. Major' },
  { initial: 'R', major: 'Electronic Eng. Major' },
  { initial: 'D', major: 'Electronic Eng. Major' },
  { initial: 'S', major: 'Applied Data Science Major' },
  { initial: 'F', major: 'Applied Data Science Major' },
]

const reviewColumns = [reviews.slice(0, 3), reviews.slice(3)]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28)

      const sections = ['home', 'features', 'reviews']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#eaf2f8] font-sans text-slate-900">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[linear-gradient(145deg,#9bd4ee_0%,#64a5cf_56%,#3476a4_100%)] shadow-[0_10px_30px_rgba(21,65,107,0.14)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
          <BrandLogo href="#home" className="w-[154px] sm:w-[176px]" />

          <nav className="hidden items-center gap-10 text-base font-semibold text-white md:flex">
            <a
              href="#home"
              className={`landing-nav-link transition hover:text-[#fdc02a] focus:outline-none ${
                activeSection === 'home' ? 'is-active' : 'text-white/80'
              }`}
            >
              Home
            </a>
            <a
              href="#features"
              className={`landing-nav-link transition hover:text-[#fdc02a] focus:outline-none ${
                activeSection === 'features' ? 'is-active' : 'text-white/80'
              }`}
            >
              Features
            </a>
            <a
              href="#reviews"
              className={`landing-nav-link transition hover:text-[#fdc02a] focus:outline-none ${
                activeSection === 'reviews' ? 'is-active' : 'text-white/80'
              }`}
            >
              Reviews
            </a>
          </nav>


          <div className="flex items-center gap-4 sm:gap-8">
            <a
              href={registerUrl}
              className="hidden text-base font-semibold text-white transition hover:text-[#fdc02a] focus:outline-none sm:inline-flex"
            >
              Register
            </a>
            <a
              href={loginUrl}
              className="landing-login-button inline-flex min-w-36 justify-center rounded-full px-10 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 focus:outline-none sm:min-w-40 sm:px-11 sm:py-2.5 sm:text-base"
            >
              <span>Login</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-[linear-gradient(145deg,#99d2f0_0%,#4d8ab8_50%,#15416b_100%)] pb-48 pt-32 [clip-path:polygon(0_0,100%_0,100%_82%,0_100%)] sm:pb-56 sm:pt-40 lg:pb-60"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
            <div className="max-w-2xl z-10">
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Learn More Easily
                <span className="block">with PENS<span className="text-[#fdc02a]">Quiz</span></span>
              </h1>
              <p className="mt-6 max-w-xl text-base font-medium leading-8 text-white/95 sm:text-lg">
                Create, share, and take interactive quizzes with the academic community at the Electronic Engineering Polytechnic Institute of Surabaya.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative isolate w-60 sm:w-[340px] lg:w-[370px]">
                <span className="absolute left-1/2 top-[60%] z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 blur-3xl sm:h-80 sm:w-80" aria-hidden="true"></span>
                <img
                  src="/img_confetti.png"
                  alt=""
                  className="absolute left-[40%] top-[-24%] z-[1] w-32 -translate-x-1/2 -translate-y-1/4 -rotate-[16deg] object-contain sm:w-44 lg:w-52"
                  aria-hidden="true"
                />
                <img
                  src="/img_trophy_1.png"
                  alt="Golden trophy for quiz achievement"
                  className="relative z-10 w-full -rotate-[7deg] object-contain drop-shadow-[0_24px_36px_rgba(0,0,0,0.16)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-20 mx-auto -mt-28 max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:grid-cols-3">
            <article className="flex items-center justify-center gap-5 rounded-2xl border border-slate-900 px-6 py-8">
              <img src="/img_student.png" alt="Users online" className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16" aria-hidden="true" />
              <div>
                <p className="text-3xl font-extrabold leading-none text-slate-900">2.4K</p>
                <p className="mt-2 text-sm font-semibold text-slate-900 sm:text-[15px]">Users online</p>
              </div>
            </article>
            <article className="flex items-center justify-center gap-5 rounded-2xl bg-[#5b8cb6] px-6 py-8 text-white">
              <img src="/img_brain.png" alt="Quizzes" className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16" aria-hidden="true" />
              <div>
                <p className="text-3xl font-extrabold leading-none">100+</p>
                <p className="mt-2 text-sm font-semibold sm:text-[15px]">Quizzes</p>
              </div>
            </article>
            <article className="flex items-center justify-center gap-5 rounded-2xl border border-slate-900 px-6 py-8">
              <img src="/img_course.png" alt="Courses" className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16" aria-hidden="true" />
              <div>
                <p className="text-3xl font-extrabold leading-none text-slate-900">20+</p>
                <p className="mt-2 text-sm font-semibold text-slate-900 sm:text-[15px]">Courses</p>
              </div>
            </article>
          </div>
        </section>

        <section id="features" className="px-5 pb-20 pt-28 text-center sm:px-8 sm:pt-36 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-snug text-slate-900 sm:text-4xl">
              Take Quizzes, Craft Your Own Quizzes,<br className="hidden md:block" />and Explore Class Courses.
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <a
                  key={feature.title}
                  href={feature.href}
                  className="group relative min-h-[360px] overflow-hidden rounded-3xl text-left shadow-[0_20px_40px_rgba(0,0,0,0.1)] outline-none transition hover:-translate-y-1 focus:ring-4 focus:ring-[#fdc02a]/60 sm:min-h-[440px]"
                >
                  <img
                    src={`/${feature.image}`}
                    alt={feature.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/20 to-transparent" aria-hidden="true" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10">
                    <div>
                      <p className="text-3xl font-bold text-white">{feature.title}</p>
                      <p className="mt-4 text-sm leading-6 text-white">{feature.description}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-base font-semibold text-white transition group-hover:translate-x-1">
                      Start now
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="px-5 pb-24 pt-10 sm:px-8 lg:px-10 lg:pb-28">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-[32px] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] sm:p-10 lg:grid-cols-[0.85fr_1.35fr] lg:items-center lg:gap-16 lg:p-14">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">User Reviews</h2>
              <p className="mt-4 max-w-sm text-base font-medium leading-7 text-slate-900 sm:text-lg">
                See what your fellow students say about their learning journey with
                <span className="font-extrabold"> PENS<span className="text-[#fdc02a]">Quiz</span></span>
              </p>
              <a
                href={registerUrl}
                className="landing-login-button mt-8 inline-flex min-w-40 justify-center rounded-full px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-slate-900/10 focus:outline-none focus:ring-4 focus:ring-[#17426a]/25"
              >
                Join Now
              </a>
            </div>

            <div className="landing-review-window grid gap-4 overflow-hidden py-4 sm:grid-cols-2">
              {reviewColumns.map((column, index) => (
                <div key={index} className={`landing-review-track ${index === 0 ? 'landing-review-track-left' : 'landing-review-track-right'}`}>
                  {column.concat(column).map((review, reviewIndex) => (
                    <article key={`${review.initial}-${reviewIndex}`} className="rounded-[28px] bg-[#1b456e] p-6 text-white">
                      <div className="flex gap-1 text-[#fdc02a]" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <svg key={starIndex} className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-4 text-sm font-medium leading-6 text-white/95">
                        PENSQuiz makes practice sessions easier to follow and helps me review class materials before exams.
                      </p>
                      <div className="mt-5 flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-bold ring-1 ring-white/20" aria-hidden="true">
                          {review.initial}
                        </div>
                        <div>
                          <p className="text-sm font-bold leading-none">User</p>
                          <p className="mt-1 text-xs font-semibold text-white/80">{review.major}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
