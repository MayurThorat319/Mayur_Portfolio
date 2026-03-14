import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          {/* Internship */}

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer Intern</h4>
                <h5>Pinnacle Info.Tech</h5>
              </div>
              <h3>2023</h3>
            </div>

            <p>
              Worked as a Backend Developer Intern where I developed backend
              functionalities using Python and Django. Built database-driven
              applications and implemented authentication, data management,
              and REST APIs.
            </p>
          </div>

          {/* Flutter Developer */}

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>Mobile Application Development</h5>
              </div>
              <h3>2024</h3>
            </div>

            <p>
              Developed cross-platform mobile applications using Flutter and
              Dart. Built dashboards, CRM applications, and integrated REST
              APIs with Node.js and MongoDB backend services.
            </p>
          </div>

          {/* Real-time App */}

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter & Firebase Projects</h4>
                <h5>Personal & Professional Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>

            <p>
              Built real-time applications including a chat application using
              Firebase with image sharing and authentication. Focused on
              building scalable mobile apps with clean UI and smooth user
              experience.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;