import { useState } from "react";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import gene from "../images/heroDNA.jpg";
import hero from "../images/hero3.jpg";
import news1 from "../images/news1.jpg";
import news2 from "../images/news2.jpg";
import news3 from "../images/news3.jpg";
import news4 from "../images/news4.jpg";
import news5 from "../images/news5.jpg";
import news6 from "../images/news6.jpg";
import news7 from "../images/news7.jpg";
import news8 from "../images/news8.jpg";
import "../home.css";

const Home = () => {
  const featuredNews = [
    {
      id: 1,
      title: "Biotech Breakthrough: New Drug Shows Promising Results",
      image: news1,
    },
    {
      id: 2,
      title: "Advancements in Gene Editing Technology",
      image: news2,
    },
    {
      id: 3,
      title: "Biotech Startup Raises $10 Million in Funding Round",
      image: news3,
    },
    {
      id: 4,
      title: "New Study Reveals Potential Treatment for Genetic Disorders",
      image: news4,
    },
    {
      id: 5,
      title: "Scientists Develop Breakthrough Diagnostic Tool for Cancer",
      image: news5,
    },
    {
      id: 6,
      title: "Emerging Trends in Biopharmaceutical Manufacturing",
      image: news6,
    },
    {
      id: 7,
      title: "Gene Therapy Shows Promising Results in Clinical Trials",
      image: news7,
    },
    {
      id: 8,
      title:
        "Biotech Company Partners with Universities for Research Collaboration",
      image: news8,
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const visibleCards = featuredNews.slice(
    currentCardIndex,
    currentCardIndex + 5
  );

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex + 4 >= featuredNews.length ? prevIndex : nextIndex;
    });
  };

  return (
    <div className="home">
      <section className="hero">
        <Parallax className="hero-image" bgImage={gene} strength={600}>
          <div className="overlay">
            <div className="hero-content absolute pt-60 pl-20 space-y-6">
              <p className="hero-main-text text-6xl font-semibold text-white">
                Biotech News <br />
                Informatics on Medicine
              </p>
              <p className="text-md text-white">
                Stay updated with the latest news and developments in the field of
                biotechnology.
              </p>
              <button className="btn rounded-xl border-none py-5 px-6 text-xl font-semibold bg-white text-black cursor-pointer" style={{ fontFamily: 'koho, sans-serif' }}>
                Explore our proposition
                <FontAwesomeIcon className="pl-3" icon={faArrowRightLong} />
              </button>
            </div>
          </div>  
        </Parallax>
      </section>

      <section className="hero-text-area">
        <Parallax strength={600}>
          <div className="updates-grid">
            <p className="hero-text text-lg font-semibold text-center p-20">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc,
            </p>
          </div>
        </Parallax>
      </section>

      <section className="hero-second">
        <Parallax className="hero-image" bgImage={hero} strength={600}>
          <div className="hero-content p-8">
            <p className="hero-main-text text-6xl font-semibold text-white">
              Biotech News <br />
              Informatics on Medicine{" "}
            </p>
            <p className="text-md text-white">
              Stay updated with the latest news and developments in the field of
              biotechnology.
            </p>
            <button className="btn rounded-full border-none py-5 px-7 text-xl bg-white text-black">
              Explore our proposition
              <FontAwesomeIcon className="pl-3" icon={faArrowRightLong} />
            </button>
          </div>
        </Parallax>
      </section>

      <section className="featured-news overflow-hidden px-8 py-4">
        <h2 className="text-3xl font-bold mb-2">Featured News</h2>
        <div className="featured-news-container flex items-center space-x-6 px-2">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={
              "text-gray-600 hover:text-blue-500 cursor-pointer text-6xl"
            }
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
          />
          <div className="flex overflow-hidden gap-16 py-10">
            {visibleCards.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-lg overflow-hidden shadow-md w-72"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={news.image}
                  alt={news.title}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                  <p className="text-gray-600">{news.description}</p>
                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={
              "text-gray-600 hover:text-blue-500 cursor-pointer text-6xl"
            }
            onClick={handleNext}
            disabled={currentCardIndex + 4 > featuredNews.length}
          />
        </div>
      </section>

      <section className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Stay informed about the latest biotech trends, research, and
          breakthroughs.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button className="btn">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
