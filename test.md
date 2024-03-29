<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Ankit Sharma-Full Stack Web Developer</title>
    <meta name="description" content="Portfolio Template for Developer" />

    <link rel="stylesheet" href="style.css" />
    <link rel="shortcut icon" href="./assets/png/aletter.jpg" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-WYDpIomCFxizsV7jKRYl+m/CVggwtRzG2ZK7OZq3c3T7Tf1CQGdq8w6P3o6Uf3bZ9/BvPwhWncAFszkY1kKj5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link
  rel="stylesheet"
  href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
/>
  </head>
  <body>

    <header id="nav-menu">
      <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src="./assets/png/fw19_0178.jpg"
              alt="AnkitSharma Logo Image"
              class="header__logo-img"
            />
          </div>
          <span class="header__logo-sub">Ankit Sharma</span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <!-- Element linked to Home section : class="nav-link home" -->
              <a href="./index.html" class="nav-link home"> Home </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#about" class="nav-link about">About </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#about" class="nav-link skills">Skills </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#projects" class="nav-link projects">
                Projects
              </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#contact" class="nav-link contact"> Contact </a>
            </li>
            <li class="header__link-wrapper">
                <!-- <a > Resume </a> -->
                <!-- id="resume-link-2" -->
                <a href="./Ankit-Sharma-Resume.pdf" class="nav-link resume"  target="_blank" download="Ankit-Sharma-Resume">
                  <button  id="resume-button-1">Resume</button>
                </a>
              </li>
          </ul>
          <div class="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              class="header__main-ham-menu"
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              class="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div class="header__sm-menu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <section id="home">
      <div class="home-hero__content">
        <h1 id="user-detail-name">Hi, My name is <span style="color: #333333;">Ankit Sharma</span></h1>
        
        <!-- <div class="wrapper">
            <div class="static-txt">I'm a,</div>
            <ul class="dynamic-txts">
                <li><span>Full Stack Web Developer</span></li>
                <li><span>MERN Stack Developer</span></li>
                <li><span>Chess Enthusiast</span></li>
            </ul>
        </div> -->
        
        <div id="user-detail-intro">
          <p class="text-primary">
            An Inquisitive and highly React <b style="color:#333333">Full Stack Web Developer
              ,Web Developer</b> with specialization in<b style="color:#333333"> MERN</b> Has
          Node, Express, Javascript, Html, Css.
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="https://github.com/ankits-svg" target="_blank" id="contact-github">Github</a>
          <a href="https://github.com/ankits-svg" target="_blank" id="contact-phone">Phone number</a>
          <a href="https://github.com/ankits-svg" target="_blank" id="contact-email">Email address</a>
          <img class="home-img" src="#" alt="">
          <!-- id="resume-link-1" -->
          
          
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <a href="https://www.linkedin.com/in/ankit-sharma-b324a8107/" target='_blank' class="home-hero__social-icon-link">
            <img
              src="./assets/png/linkedin-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://github.com/ankits-svg" class="home-hero__social-icon-link" target='_blank'>
            <img
              src="./assets/png/github-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link" target='_blank'>
            <img
              src="./assets/png/twitter-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link" target='_blank'>
            <img
              src="./assets/png/yt-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a
          target='_blank'
            href="#"
            class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img
              src="./assets/png/insta-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
    </section>
    
    <section id="about" class="about section">
      <div class="main-container">
        <div id="user-detail-intro">
          <h1 id="about.section.section">About</h1>
         <div>
          <h1>"MERN"</h1>
          <h1>"Javascript"</h1>
          <h1>"MongoDB"</h1>
        <h1>"Frontend"</h1>
        </div>
        </div>
        
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                Hi Everyone, My name is
                <strong>Ankit Sharma</strong>
                and I'm a <strong> Full Stack Web Developer specialised in MERN</strong> living currently in
                Gorakhpur, (Uttar Pradesh). Graduated in
                <strong> (Mechanical Engineering)</strong> from
                <strong>Pranveer Singh Institute Of Technology, Kanpur (UP)</strong>. Then I joined full stack development course by
                <strong>Masai School</strong> a military type
                coding school.
              </p>
              <p class="about__content-details-para">
                Terms That can describe me apart form Coding : 
                 <strong> Entrepreneure</strong>,<strong> Entrepreneure</strong>,<strong> Chess Enthusiast</strong>,<strong>Book Reader</strong>.
                 
              </p>
              <button id="resume-button-2">
              <a href="./Ankit-Sharma-Resume.pdf" target="_blank" download="Ankit-Sharma-Resume" id="resume-link-2">Resume</a></button>
            </div>

            <a href="./#contact"
              >Contact</a
            >
          </div>
          <div id="skills">
            
            
            <div class="skills-card">
                <img class="skills-card-img" src="#" alt="">
              <h3 class="skills-card-name">html</h3>
            </div>
              <div class="skills-card">
                <img class="skills-card-img" src="#" alt="">
                <h3 class="skills-card-name">CSS</h3 >
              </div>
              <div class="skills-card">
                <img class="skills-card-img" src="#" alt="">
                <h3 class="skills-card-name">JavaScript</h3>
              </div>
              
           
          </div>
        </div>
      </div>
    </section>


    <section id="projects">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <!-- <span class="heading-sec__sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span> -->
        </h2>

        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="https://user-images.githubusercontent.com/107456969/229345775-58ff7a33-a2b9-442b-9ca1-b086b1d9cbf0.png"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="project-card">
              <h3 class="project-title">Shop Vibes</h3>
              <img src="#" alt="">
              <p class="project-description">
                ShopVibes is a shopping and lifestyle brand which is the ultimate destination for the latest fashion styles that are handpicked and are available at the best price that one can find anywhere and also you can do business with shopvibes.com
              </p>
              <div class="project-tech-stack">
                <!-- <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>Reactjs</p> -->
              </div>
              <div>
                <a
                href="https://shopvibes.vercel.app/"
                class="project-deployed-link"
                target="_blank"
                >See this Live</a
              >
              <a
                href="https://github.com/madhurn29/courageous-wound-8341"
                class="project-github-link"
                target="_blank"
                >View Code</a
              >
              </div>
            </div>
            <div class="project-card">
              <h3 class="project-title">Shop Vibes</h3>
              <img src="#" alt="">
              <p class="project-description">
                ShopVibes is a shopping and lifestyle brand which is the ultimate destination for the latest fashion styles that are handpicked and are available at the best price that one can find anywhere and also you can do business with shopvibes.com
              </p>
              <div class="project-tech-stack">
                <!-- <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>Reactjs</p> -->
              </div>
              <div>
                <a
                href="https://shopvibes.vercel.app/"
                class="project-deployed-link"
                target="_blank"
                >See this Live</a
              >
              <a
                href="https://github.com/madhurn29/courageous-wound-8341"
                class="project-github-link"
                target="_blank"
                >View Code</a
              >
              </div>
            </div>
            <div class="project-card">
              <h3 class="project-title">Shop Vibes</h3>
              <img src="#" alt="">
              <p class="project-description">
                ShopVibes is a shopping and lifestyle brand which is the ultimate destination for the latest fashion styles that are handpicked and are available at the best price that one can find anywhere and also you can do business with shopvibes.com
              </p>
              <div class="project-tech-stack">
                <!-- <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>Reactjs</p> -->
              </div>
              <div>
                <a
                href="https://shopvibes.vercel.app/"
                class="project-deployed-link"
                target="_blank"
                >See this Live</a
              >
              <a
                href="https://github.com/madhurn29/courageous-wound-8341"
                class="project-github-link"
                target="_blank"
                >View Code</a
              >
              </div>
            </div>
          </div>
          <div class="project-card">
            <div class="projects__row-img-cont">
              <img
                src="https://user-images.githubusercontent.com/103572350/229416971-402708f6-07bc-4705-9ea6-f79c32649f8f.png"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="project-title">MegaDeals</h3>
              <img src="#" alt="">
              <p class="project-description">
                Megadeals is an Indian e-commerce website founded in 2010. It offers a wide range of products across various categories such as electronics, fashion and more.The platform also offers seller services, logistics, and payment solutions.
              </p>
              <div class="project-tech-stack">
                <!-- <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>Reactjs</p> -->
              </div>
              <div>
                <a
                href="https://megadeal.vercel.app/"
                class="project-deployed-link"
                target="_blank"
                >See this Live</a
              >
              <a
                href="https://github.com/avnishsingh0/illustrious-health-8601"
                class="project-github-link"
                target="_blank"
                >View Code</a
              >
              </div>
            </div>
          </div>
          <div class="project-card">
            <div class="projects__row-img-cont">
              <img
                src="https://user-images.githubusercontent.com/103572350/211359968-cb35eda4-80c2-48c9-9340-420d512640ce.png"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="project-title">Friend's Fashion Adda</h3>
              <img src="#" alt="">
              <p class="project-description">
                Friend's Fashion Adda is the fashion e-commerce startup that stands out from the rest. It offers a trendy collection of apparel based on dazzling and upbeat designs that resonate with the millennials.
              </p>
              <div>
                <div class="project-tech-stack">
                  <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>Reactjs</p>
                </div>
                <a
                href="https://github.com/ankits-svg/-celestial-pie-5247"
               
                class="project-github-link"
                target="_blank"
                >GitHub</a
              >
              <a
              href="https://friendsfashionadda.netlify.app/"
              class="project-deployed-link"
                target="_blank"
                >See this live</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <h3 class="react-activity-calendar">GitHub Calendar</h3>
    <github-calendar user-name="ankits-svg" tooltips="true" >Loading Fallback...</github-calendar>
    <github-alike-calendar username="ankits-svg" responsive="true"></github-alike-calendar>
<!-- Stats -->
<div>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=ankits-svg&theme=sea&hide_border=true&border_radius=10&date_format=j%20M%5B%20Y%5D&background=#a084ca" alt="error" id="github-streak-stats">
  <img src="https://github-readme-stats.vercel.app/api?username=ankits-svg&show_icons=true&title_color=#4c3575&text_color=#4c3575&icon_color=#4c3575&bg_color=red&border_radius=10&border_color=#4c3575" alt="error" id="github-stats-card">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ankits-svg&title_color=4C3575&icon_color=#4c3575&text_color=#4c3575&bg_color=#a084ca&show_icons=true" alt="error"  id="github-top-langs">
</div>
    

    <section id="contact">
       
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <div>
            <div id="contact-linkedin">
              <a href="https://www.linkedin.com/in/ankit-sharma-b324a8107/" target="_blank" >Linkedin</a> 
            </div>
            <div id="contact-github">
              <a href="https://github.com/ankits-svg" target="_blank" >Github</a>
            </div>
             
          </div>
          <!-- <span class="heading-sec__sub heading-sec__sub--lt">
            Let's start a project together
          </span> -->
          <span class="heading-sec__sub heading-sec__sub--lt">
            <span style="color:#333333"><b>Phone:</b></span> (+91-8953453088)
          </span>
          <!-- <a href="https://www.linkedin.com/in/ankit-sharma-b324a8107/" id="contact-linkedin">Linkedin</a>  -->
          </span>
          <!-- <span class="heading-sec__sub heading-sec__sub--lt">
            <span style="color:#333333"><b>Email:</b></span> ankits745@gmail.com
          </span> -->
          <span class="heading-sec__sub heading-sec__sub--lt">
            <span style="color:#333333"></span>Feel free to contact for <strong style="color:#333333">collaborations on a project</strong> or <strong style="color:#333333">discussions of work.</strong> <b style="color:#333333">ankits745@gmail.com.</b>
          </span>
        </h2>
        <div class="contact__form-container">
          
            <div class="contact__form-field">
              <label class="contact__form-label" for="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                class="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                class="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                class="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn" onclick="sendMail()">
              Submit
            </button>
          
        </div>
      </div>
    </section>
    

    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ankit-sharma-b324a8107/">
                <img
                  class="main-footer__icon"
                  src="./assets/png/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/ankits-svg">
                <img
                  class="main-footer__icon"
                  src="./assets/png/github-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/png/twitter-ico.png"
                  alt="icon"
                />
              </a>
               <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/png/yt-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src="./assets/png/insta-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Ankit Sharma</h4>
            <p class="main-footer__short-desc">
            Thank you for visiting my portfolio. Let's create something amazing together!
            </p>
          </div>
        </div>

        <!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) -->
        <div class="main-footer__lower">
          &copy; Copyright 2021. Made by
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ankit-sharma-b324a8107/"
            >Ankit Sharma</a
          >
        </div>
      </div>
    </footer>

    <!-- <div>
      <div id="nav-menu">Navbar</div>
      <div id="home">Home section</div>
      <div id="about" class="about section">About section</div>
      <div id="skills">Skills section</div>
      <div id="projects">Projects section</div>
      <div id="contact">Contact section</div>
    </div> -->
    

    

    <script src="./index.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/github-calendar-element@1.0.0/lib/main.js" ></script>
    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init("cOE32Vukn6naV1oz7");
   })();
</script>
<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
  </body>
</html>


