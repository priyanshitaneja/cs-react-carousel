import React, { useState } from "react";

const dummyImages = [
  {
    id: 1,
    url: "https://picsum.photos/id/88/200/300"
  },
  {
    id: 2,
    url: "https://picsum.photos/id/76/200/300"
  },
  {
    id: 3,
    url: "https://picsum.photos/id/66/200/300"
  },
  {
    id: 4,
    url: "https://picsum.photos/id/62/200/300"
  },
  {
    id: 5,
    url: "https://picsum.photos/id/35/200/300"
  },
  {
    id: 6,
    url: "https://picsum.photos/id/37/200/300"
  },
  {
    id: 7,
    url: "https://picsum.photos/id/38/200/300"
  },
  {
    id: 8,
    url: "https://picsum.photos/id/43/200/300"
  }
];

const Carousel = () => {
  let [current, setCurrent] = useState(1);

  const handleNext = () => {
    const next = ++current;
    if (next > dummyImages.length) {
      setCurrent(1);
    } else {
      setCurrent(next);
    }
  };

  const handlePrev = () => {
    const prev = --current;
    if (prev < 1) {
      setCurrent(dummyImages.length);
      return;
    }
    setCurrent(prev);
  };

  const handleDots = (e) => {
    const selected = e.target.getAttribute("data-key");
    setCurrent(+selected);
  };

  return (
    <div className="reactCarousel">
      <h1 className="reactCarousel__heading">React Carousel</h1>
      <div className="reactCarousel__carousel">
        <span onClick={handlePrev} className="reactCarousel__arrow">
          {"<"}
        </span>
        <div className="reactCarousel__carousel--images">
          {dummyImages.map((image) => {
            return (
              <img
                className={`reactCarousel__carousel--image ${
                  current === image.id && "active"
                }`}
                src={image.url}
                key={image.id}
                alt={image.id}
              />
            );
          })}
        </div>
        <span onClick={handleNext} className="reactCarousel__arrow">
          {">"}
        </span>
      </div>
      <div>
        {dummyImages.map((image) => {
          return (
            <span
              onClick={(e) => handleDots(e)}
              className={`reactCarousel__carousel--dot ${
                current === image.id && "active-dot"
              }`}
              data-key={image.id}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
