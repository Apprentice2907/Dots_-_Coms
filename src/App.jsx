import { useEffect } from "react";
import "./style.css";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  useEffect(() => {
    function locomotiveAnimation() {
      gsap.registerPlugin(ScrollTrigger);

      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true },
      });
      locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      ScrollTrigger.refresh();
    }

    function loadingAnimation() {
      var tl = gsap.timeline();
      tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2,
      });
      tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out",
      });
      tl.from("nav", {
        opacity: 0,
        delay: -0.2,
      });
      tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });
    }

    function navAnimation() {
      var nav = document.querySelector("nav");

      nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();

        tl.to("#nav-bottom", {
          height: "21vh",
          duration: 0.5,
        });
        tl.to(".nav-part2 h5", {
          display: "block",
          duration: 0.1,
        });
        tl.to(".nav-part2 h5 span", {
          y: 0,
          stagger: {
            amount: 0.5,
          },
        });
      });
      nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();
        tl.to(".nav-part2 h5 span", {
          y: 25,
          stagger: {
            amount: 0.2,
          },
        });
        tl.to(".nav-part2 h5", {
          display: "none",
          duration: 0.1,
        });
        tl.to("#nav-bottom", {
          height: 0,
          duration: 0.2,
        });
      });
    }

    function page2Animation() {
      var rightElems = document.querySelectorAll(".right-elem");

      rightElems.forEach(function (elem) {
        const target = elem.querySelector("img");

        if (!target) return; 

        elem.addEventListener("mouseenter", function () {
          gsap.to(target, {
            opacity: 1,
            scale: 1,
          });
        });
        elem.addEventListener("mouseleave", function () {
          gsap.to(target, {
            opacity: 0,
            scale: 0,
          });
        });
        elem.addEventListener("mousemove", function (dets) {
          gsap.to(target, {
            x: dets.x - elem.getBoundingClientRect().x - 90,
            y: dets.y - elem.getBoundingClientRect().y - 215,
          });
        });
      });
    }

    function page3VideoAnimation() {
      var page3Center = document.querySelector(".page3-center");
      var video = document.querySelector("#page3 video");

      page3Center.addEventListener("click", function () {
        video.play();
        gsap.to(video, {
          transform: "scaleX(1) scaleY(1)",
          opacity: 1,
          borderRadius: 0,
        });
      });
      video.addEventListener("click", function () {
        video.pause();
        gsap.to(video, {
          transform: "scaleX(0.7) scaleY(0)",
          opacity: 0,
          borderRadius: "30px",
        });
      });

      var sections = document.querySelectorAll(".sec-right");

      sections.forEach(function (elem) {
        const video = elem.querySelector("video"); 

        if (!video) return; 
        elem.addEventListener("mouseenter", function () {
          video.style.opacity = 1;
          video.play();
        });

        elem.addEventListener("mouseleave", function () {
          video.style.opacity = 0;
          video.load();
        });
      });
    }

    locomotiveAnimation();

    navAnimation();

    page2Animation();

    page3VideoAnimation();

    // page6Animations()

    //loadingAnimation()
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        DOTS &amp; COMS. — Website &amp; Application Solutions Agency
      </title>
      <link rel="shortcut icon" href="Photo/logo.jpg" type="image/x-icon" />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css"
      />
      <link rel="stylesheet" href="style.css" />
      <nav>
        <h1>DOTS &amp; COMS.</h1>
        <div className="nav-part2">
          <div className="nav-elem">
            <a
              href="https://www.dotsandcoms.in/responsive-website-designing-company-vadodara.aspx"
              style={{ textDecoration: "none" }}
            >
              <h4>Web Design</h4>
            </a>
            <h5>
              <span>UI/UX designs</span>
            </h5>
            <h5>
              <span>Projects</span>
            </h5>
            <h5>
              <span>Custom Web &amp; App</span>
            </h5>
          </div>
          <div className="nav-elem">
            <a
              href="https://www.dotsandcoms.in/android-ios-mobile-app-development-company-baroda.aspx"
              style={{ textDecoration: "none" }}
            >
              <h4>Mobile Apps</h4>
            </a>
            <h5>
              <span>IOS / Apple App</span>
            </h5>
            <h5>
              <span>Android App </span>
            </h5>
            <h5>
              <span>Flutter App </span>
            </h5>
            <h5>
              <span>Cross Platform App</span>
            </h5>
          </div>
          <div className="nav-elem">
            <a
              href="https://www.dotsandcoms.in/windows-web-hosting-service-provider-baroda.aspx"
              style={{ textDecoration: "none" }}
            >
              <h4>Website Hosting</h4>{" "}
            </a>
            <h5>
              <span>Hosting Plans</span>
            </h5>
            <h5>
              <span>VPS Hosting</span>
            </h5>
            <h5>
              <span>Dedicated Servers</span>
            </h5>
            <h5>
              <span>SSL Certificate</span>
            </h5>
          </div>
          <div className="nav-elem">
            <a
              href="https://www.dotsandcoms.in/organic-seo-ppc-digital-marketing-vadodara.aspx"
              style={{ textDecoration: "none" }}
            >
              <h4>Digital Marketing</h4>
            </a>
            <h5>
              <span>Organic SEO</span>
            </h5>
            <h5>
              <span>Social Media Marketing</span>
            </h5>
            <h5>
              <span>Google AdWords</span>
            </h5>
          </div>
          <div className="nav-elem">
            <a
              href="https://www.dotsandcoms.in/website-mobile-app-development-company-portfolio-baroda.aspx"
              style={{ textDecoration: "none" }}
            >
              <h4>Our Work</h4>
            </a>
            <h5>
              <span>E-commerce</span>
            </h5>
            <h5>
              <span>Government</span>
            </h5>
            <h5>
              <span>Portfolio</span>
            </h5>
          </div>
          <div className="nav-elem">
            <a
              href="https://www.dotsandcoms.in/about-web-development-company-baroda.aspx"
              style={{ textDecoration: "none" }}
            >
              <h4>About Us</h4>
            </a>
            <h5>
              <span>History</span>
            </h5>
            <h5>
              <span>Activities</span>
            </h5>
            <h5>
              <span>Events</span>
            </h5>
            <h5>
              <span>Awards</span>
            </h5>
          </div>
        </div>
        <a
          href="https://www.dotsandcoms.in/contact-webdesign-mobileapp-socialmedia-marketing-baroda.aspx"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="contact-button">
            Contact Us
            <svg fill="none" viewBox="0 0 20 20">
              <path
                fill="#fff"
                d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"
              ></path>
            </svg>
          </button>
        </a>

        <div id="nav-bottom"></div>
      </nav>
      <div id="main">
        <div id="page1">
          <h1>
            Website &amp; App
            <span>
              <svg className="c-bttn__morph" fill="none" viewBox="0 0 131 136">
                <path
                  className="g-path"
                  data-morph="end"
                  fill="#fff"
                  d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
                ></path>
                <path
                  className="g-path"
                  data-morph="start"
                  fill="#fff"
                  d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
                  data-original="M65.72 109.14c10.08 0 17.76-3.78 23.04-11.34 5.4-7.68 8.1-17.64 8.1-29.88 0-12.24-2.7-22.2-8.1-29.88-5.28-7.68-12.96-11.52-23.04-11.52-9.96 0-17.7 3.84-23.22 11.52-5.4 7.68-8.1 17.64-8.1 29.88 0 12.12 2.7 22.02 8.1 29.7 5.52 7.68 13.26 11.52 23.22 11.52Zm46.08 7.02c-11.64 12.6-27.06 18.9-46.26 18.9s-34.62-6.3-46.26-18.9C7.76 103.56 2 87.48 2 67.92c0-19.56 5.76-35.64 17.28-48.24C30.92 7.08 46.34.78 65.54.78s34.62 6.3 46.26 18.9c11.64 12.6 17.46 28.68 17.46 48.24 0 19.56-5.82 35.64-17.46 48.24Z"
                ></path>
              </svg>
            </span>
          </h1>
          <h1>Solutions Agency</h1>
          <p>
            We provide end-to-end digital solutions, helping startups and
            enterprises build, launch, and scale exceptional websites and mobile
            apps.
          </p>
          <div id="page1-something">
            <h4>Web &amp; App Development</h4>
            <h4>UI/UX Design</h4>
            <h4>and</h4>
            <h4>Hosting &amp; Domains</h4>
          </div>
          <div id="moving-div">
            <div id="blur-left" />
            <div className="move">
              <img src="https://lazarev.kiev.ua/la24/forbes.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/wf.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/rd.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="" />
            </div>
            <div className="move">
              <img src="https://lazarev.kiev.ua/la24/forbes.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/wf.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/rd.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="" />
            </div>
            <div id="blur-right" />
          </div>
        </div>
        <div id="page2">
          <div id="page2-left">
            <h3 style={{ color: "#0BA34E", fontSize: "1.7vw" }}>
              WE WILL DOT COM YOUR COMPANY
            </h3>
            <br />
            <h5>
              We help businesses leverage design, technology, and digital
              marketing to improve their online presence and drive growth. We
              have been a trusted digital solutions supplier since 1999, with
              expertise in branding, website development, eCommerce, SEO, Google
              Ads, and social media marketing. We provide web design services,
              including the creation of responsive and user-friendly websites
              that are performance-optimized. We specialise in mobile app
              development, creating smooth experiences on both Android and iOS
              platforms. As a web hosting company, we ensure secure, reliable
              and high-speed hosting solutions. Our digital marketing methods,
              which include search engine optimization (SEO) and pay-per-click
              (PPC) campaigns, support businesses in increasing visibility and
              reaching their target audience more effectively. With an intense
              focus on technology-driven solutions, we also create custom
              back-office apps and connect secure payment methods to enhance
              business operations. By combining innovation and strategy, we
              enable businesses to stay ahead in the competitive digital.
            </h5>
          </div>
          <div id="page2-right">
            <div className="right-elem" id="right-elem1">
              <h2>
                {" "}
                <br />
                What Makes a Website Truly Interactive and <br />
                User-Friendly in 2024?
              </h2>
              <img src="Photo/1.jpg" alt="" />
            </div>
            <div className="right-elem">
              <h2>
                How Can Mobile App Design Improve Interactivity and <br />
                Customer Engagement?
              </h2>
              <img src="Photo/2.jpg" alt="" />
            </div>
            <div className="right-elem">
              <h2>
                What SEO Strategies Should Businesses <br />
                Prioritize This Year?
              </h2>
              <img src="Photo/3.jpg" alt="" />
            </div>
            <div className="right-elem">
              <h2>
                Why Is Custom eCommerce Development <br />
                Better Than Templates?
              </h2>
              <img src="Photo/4.jpg" alt="" />
            </div>
          </div>
        </div>
        <div id="page3">
          <video src="Photo/in.mp4" />
          <div className="page3-center">
            <div className="icon">
              <i className="ri-play-fill" />
            </div>
            <h5>Watch Showreel</h5>
          </div>
        </div>
        <div id="page4">
          <div className="section">
            <div className="sec-left">
              <h2>About us</h2>
              <p>
                Meet like minded techies, who talk in zeros and ones!
                Associating with more then 150 team associates over a decade, we
                currently are a team strength of 40 which includes: Lessons from
                different countries Marketing team TechSupport Team Studio with
                programmers, designers and app developers If you are a customer,
                you are probably interacting with one or two people who are at
                the frontline.
              </p>
            </div>
            <div className="sec-right">
              <img src="Photo/back.jpg" alt="" />
              <video muted="" src="Photo/office.mp4" />
            </div>
          </div>
          <div className="section">
            <div className="sec-left">
              <h2>Team</h2>
              <p>
                we assure you that there are many layers of people who do what
                you see. If you are someone who is inspired to join our team;
                visit our career section and see if you have it in you to be a
                member of our elite team.
              </p>
            </div>
            <div className="sec-right">
              <img src="Photo/ground.jpg" alt="" />
              <video muted="" src="Photo/coffee.mp4" />
            </div>
          </div>
        </div>
        <div id="page4.5">
          <section className="stats-section">
            <div className="stats-grid">
              <div className="stats-card large">
                <video className="card-video" autoPlay muted loop playsInline>
                  <source src="Photo/white.mp4" type="video/mp4" />
                </video>

                <div className="card-content">
                  <h2
                    style={{
                      fontSize: 80,
                      fontFamily: '"Bebas Neue", sans-serif',
                    }}
                  >
                    Get Your Website Audit <br /> Report for FREE
                  </h2>
                  <p>Identify performance and security issues.</p>
                </div>
              </div>
              <div className="stats-card large">
                <video className="card-video" autoPlay muted loop playsInline>
                  <source src="Photo/yellow.mp4" type="video/mp4" />
                </video>
                <div className="card-content">
                  <h2>SEO Analysis &amp; Speed Check</h2>
                  <p>
                    Identify issues affecting your search engine rankings &amp;{" "}
                    <br />
                    Ensure fast loading times for a better user experience.
                  </p>
                </div>
              </div>
          
              <div className="stats-card small">
                <video className="card-video" autoPlay muted loop playsInline>
                  <source src="Photo/red.mp4" type="video/mp4" />
                </video>
                <div className="card-content">
                  <h2>Security Verification</h2>
                  <p>
                    Identify potential vulnerabilities, assess risk exposure,and
                    implement measures to fortify your website against cyber
                    threats.
                  </p>
                </div>
              </div>
              <div className="stats-card small">
                <video className="card-video" autoPlay muted loop playsInline>
                  <source src="Photo/green.mp4" type="video/mp4" />
                </video>
                <div className="card-content">
                  <h2>Mobile Compatibility Test</h2>
                  <p>
                    Optimize your site for seamless mobile performance with fast
                    loading, smooth navigation, and responsive design.
                  </p>
                </div>
              </div>
              <div className="stats-card small">
                <video className="card-video" autoPlay muted loop playsInline>
                  <source src="Photo/blue.mp4" type="video/mp4" />
                </video>
                <div className="card-content">
                  <h2>Free Report in 48 Hours</h2>
                  <p>
                    Get a detailed analysis with insights <br /> to improve
                    performance and engagement.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="page5">
          <a
            href="https://www.dotsandcoms.in/about-web-development-company-baroda.aspx"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button>See Our Impact</button>
          </a>
          <div id="page5-right">
            <p>
              <span />
              We've empowered hundreds of businesses
              <span /> with custom web and app solutions. From domain
              registrations to full-scale website launches and UX-driven design,
              our results speak for themselves. Take a look at the impact we've
              made through our numbers.
            </p>
            <div id="page5-content">
              <div className="uiux">
                <details open="">
                  <summary>
                    <h1>What We've Built</h1>
                    <div id="flex">
                      <h4>Domains</h4>
                      <h4>Booking</h4>
                      <h4>Hosting</h4>
                      <h4>Designs</h4>
                    </div>
                  </summary>
                  <div id="page-container">
                    <div className="page5-elem">
                      <div className="over" />
                      <h3>
                        135000+
                        <br />
                        Domains Booked
                      </h3>
                      <p>
                        We’ve helped over 135,000 customers secure their perfect
                        domain names. Whether you're launching a brand, starting
                        a blog, or building your online presence, our simple and
                        fast domain registration service makes it easy to get
                        started.
                      </p>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                    <div className="page5-elem">
                      <div className="over" />
                      <h3>
                        6000+
                        <br />
                        Websites Hosted
                      </h3>
                      <p>
                        Join thousands of satisfied clients who trust us to keep
                        their websites running smoothly and securely. From small
                        personal blogs to large-scale enterprise solutions, our
                        reliable hosting infrastructure ensures top performance,
                        24/7 uptime, and expert support every step of the way.
                      </p>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                    <div className="page5-elem">
                      <div className="over" />
                      <h3>
                        5000+ <br />
                        Websites Designed
                      </h3>
                      <p>
                        Our creative team has crafted over 5,000 stunning
                        websites tailored to meet diverse business needs. From
                        sleek corporate sites to engaging eCommerce platforms,
                        we turn ideas into impactful digital experiences that
                        captivate and convert.
                      </p>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                    <div className="page5-elem">
                      <div className="over" />
                      <h3>
                        8000+ <br />
                        Happy Customers
                      </h3>
                      <p>
                        Customer satisfaction is at the heart of everything we
                        do. With over 8,000 happy clients, our commitment to
                        quality service, timely support, and dependable
                        solutions has earned us lasting trust and glowing
                        feedback worldwide.
                      </p>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                  </div>
                </details>
              </div>
              <div className="product">
                <details>
                  <summary>
                    <h1>Web &amp; App Solutions</h1>
                    <div id="flex">
                      <h4>Web Development</h4>
                      <h4>App Development</h4>
                      <h4>UI/UX Design</h4>
                      <h4>Prototyping &amp; Testing</h4>
                    </div>
                  </summary>
                  <div id="page-container">
                    <div className="page5-elem">
                      <div className="over" />
                      <h3>Web Development</h3>
                      <p>
                        We craft scalable, secure, and performance-optimized
                        websites using modern technologies tailored to your
                        business needs. From landing pages to complex platforms
                        — we build with precision and purpose.
                      </p>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                    <div className="page5-elem">
                      <div className="over" />
                      <h3>App Development</h3>
                      <p>
                        Our team designs and develops responsive mobile and web
                        apps with seamless functionality, intuitive UX, and
                        platform-specific performance — whether for iOS,
                        Android, or PWA.
                      </p>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                    <div className="page5-elem">
                      <div className="over" />
                      <h3>UI/UX Design</h3>
                      <p>
                        We create intuitive and visually appealing interfaces
                        that elevate user experiences. Our design process
                        focuses on usability, clarity, and engagement.
                      </p>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                    <div className="page5-elem">
                      <div className="over" />
                      <h3>Prototyping &amp; Testing</h3>
                      <p>
                        We bring ideas to life through interactive prototypes
                        and validate them with real users to ensure your product
                        solves the right problems.
                      </p>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div id="page6">
          <h1>We Build Scalable, User-Centric Solution</h1>
          <div id="page6-content">
            <a
              href="https://www.dotsandcoms.in/website-mobile-app-development-company-portfolio-baroda.aspx"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div id="blue-btn">
                <h4>
                  View Our Work <i className="ri-arrow-right-up-line" />
                </h4>
              </div>
            </a>
            <div id="right-6">
              <p>
                At Dots &amp; Coms, we craft websites and applications tailored
                to your business goals. From intuitive UI/UX to robust backend
                systems, our team delivers secure, scalable, and
                performance-driven digital products that evolve with your needs.
                Whether you're launching a startup or scaling an enterprise, we
                turn your ideas into elegant, functional solutions that drive
                real results.
              </p>
              <p>
                Empower your digital presence with custom-built websites and
                applications that work seamlessly across all devices. We don’t
                just develop — we partner with you to innovate, optimize, and
                grow your digital footprint.
              </p>
            </div>
          </div>
          <div id="page6-bottom">
            <div id="btm6-part1" className="btm6-parts">
              <h5>Website Development Service</h5>
              <h4>
                <span>1</span>Custom Website
              </h4>
              <h4>
                <span>2</span>Responsive Web Design
              </h4>
              <h4>
                <span>3</span>eCommerce Website
              </h4>
              <h4>
                <span>4</span>Content Management Systems (CMS)
              </h4>
              <h4>
                <span>5</span>Website Redesign Services
              </h4>
              <h4>
                <span>6</span>Maintenance &amp; Support
              </h4>
            </div>
            <div id="btm6-part2" className="btm6-parts">
              <h5> Application Development Service</h5>
              <h4>
                <span>1</span>Mobile App Development
              </h4>
              <h4>
                <span>2</span>iOS Application
              </h4>
              <h4>
                <span>3</span>Android native Application
              </h4>
              <h4>
                <span>4</span>Progressive Web Apps (PWA)
              </h4>
              <h4>
                <span>5</span>Enterprise Software Solutions
              </h4>
              <h4>
                <span>6</span>SaaS Product Development
              </h4>
            </div>
            <div id="btm6-part3" className="btm6-parts">
              <h5>Technical &amp; Infrastructure Services</h5>
              <h4>
                <span>1</span>Web Hosting &amp; Domain
              </h4>
              <h4>
                <span>2</span>Cloud Deployment &amp; Integration
              </h4>
              <h4>
                <span>2</span>Database Design &amp; Management
              </h4>
              <h4>
                <span>2</span>DevOps and CI/CD Solutions
              </h4>
              <h4>
                <span>2</span>Server Management
              </h4>
            </div>
            <div id="btm6-part4" className="btm6-parts">
              <h5>Security &amp; Compliance</h5>
              <h4>
                <span>1</span>Security Audits
              </h4>
              <h4>
                <span>2</span>SSL Certificate Integration
              </h4>
              <h4>
                <span>3</span>GDPR &amp; Data Protection
              </h4>
              <h4>
                <span>4</span>Secure Authentication{" "}
              </h4>
              <h4>
                <span>5</span>Authorization Systems
              </h4>
            </div>
            <div id="btm6-part5" className="btm6-parts">
              <h5>UI/UX and Branding Services</h5>
              <h4>
                <span>1</span>UI/UX Design
              </h4>
              <h4>
                <span>2</span>Wireframing &amp; Prototyping
              </h4>
              <h4>
                <span>3</span>Brand Identity Design
              </h4>
              <h4>
                <span>4</span>Design Systems
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
