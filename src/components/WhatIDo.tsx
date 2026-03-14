import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* MOBILE DEVELOPMENT */}

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-content-in">
              <h3>MOBILE DEVELOPMENT</h3>
              <h4>Building Cross-Platform Applications</h4>

              <p>
                Developing scalable and high-performance mobile applications
                using Flutter. Focused on building clean UI, smooth user
                experiences, and production-ready apps with modern
                architectures.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Flutter</div>
                <div className="what-tags">Dart</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Provider</div>
                <div className="what-tags">State Management</div>
                <div className="what-tags">UI/UX</div>
                <div className="what-tags">Android Apps</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* BACKEND */}

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-content-in">
              <h3>BACKEND DEVELOPMENT</h3>

              <h4>Building APIs & Scalable Systems</h4>

              <p>
                Creating secure and scalable backend services for mobile
                applications. Experienced in building REST APIs, handling
                authentication, and integrating databases for real-time data
                management.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Node.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">Authentication</div>
                <div className="what-tags">Cloud Storage</div>
                <div className="what-tags">API Integration</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}