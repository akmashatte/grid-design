import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <span className="total_logo">
          <p className="logo">EDYODA</p>
          <br />
          <p className="sublogo">Stories</p>
        </span>
        <span className="header_content">
          <p className="dropdowntext">Explore Categories</p>
          <img
            className="dropdown_icon"
            src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-down-arrows-those-icons-fill-those-icons-1.png"
          />
          <p className="header_text">
            EdYoda is free learning and knowledge <br />
            sharing platform for techies
          </p>
          <button
            className="Main_button"
            // style="color: #fff; background: #0084ff;"
          >
            Go To Main Website
          </button>
        </span>
      </header>
      <section className="categories">
        <div>
          <h1 className="category_heading">Latest Posts</h1>
          <img
            className="filter"
            src="https://img.icons8.com/fluency/48/000000/filter--v1.png"
          />
          <p className="filter_text">Filter by Category</p>
        </div>
        <div>
          <button
            className="categories_button"
            style={{
              color: "#fff",
              background: "#0084ff",
            }}
            // style="color: #fff; background: #0084ff;"
          >
            All
          </button>
          <button className="categories_button">Artificial Intelligence</button>
          <button className="categories_button">Cloud Computing</button>
          <button className="categories_button">DevOps</button>
          <button className="categories_button">Programming Languages</button>
          <button className="categories_button">
            Mobile Application Development
          </button>
          <button className="categories_button">Technology and Tools</button>
          <button className="categories_button">
            Get a job in a Tech Company
          </button>
          <button className="categories_button">Others</button>
        </div>
        <div className="items">
          <div className="cards">
            <div className="cards_imgsection">
              <img
                className="cards_img"
                src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png"
              />
            </div>
            <div className="text_section">
              <p className="cards_title">
                Introduction to Machine Learning online course
              </p>
              <div className="author_container">
                <p className="author">EdYoda</p>
                <p className="date">| 23 Aug 2019</p>
                <p className="cards_text">
                  We have had an insight into Artificial Intelligence well one
                  of its subfields is machine learning and this introduction
                  will help you get a fair idea of what this machinne
                  learning...
                </p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="cards_imgsection">
              <img
                className="cards_img"
                src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png"
              />
            </div>
            <div className="text_section">
              <p className="cards_title">LAMP Stack Vs MEAN stac...</p>
              <div className="author_container">
                <p className="author">EdYoda</p>
                <p className="date">| 23 Aug 2019</p>
                <p className="cards_text">
                  In today's dynamic world developing a rapid application with a
                  smooth user interface that can adapt specific features is the
                  main business requirement Many organizations...
                </p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="cards_imgsection">
              <img
                className="cards_img"
                src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png"
              />
            </div>
            <div className="text_section">
              <p className="cards_title">
                Impact of Cloud Computing in various industries
              </p>
              <div className="author_container">
                <p className="author">EdYoda</p>
                <p className="date">| 24 Aug 2019</p>
                <p className="cards_text">
                  Cloud computing has been rapidly gaining pace in the world of
                  information technology it has been observed that over 90% of
                  global enterprises are using Cloud...
                </p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="cards_imgsection">
              <img
                className="cards_img"
                src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png"
              />
            </div>
            <div className="text_section">
              <p className="cards_title">Challenges of Machine Le...</p>
              <div className="author_container">
                <p className="author">EdYoda</p>
                <p className="date">| 24 Aug 2019</p>
                <p className="cards_text">
                  Machine Learning is a subset of artificial intelligence which
                  is an important part of computer science. The revolution of
                  Big Data promises to transform the way we work live and...
                </p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="cards_imgsection">
              <img
                className="cards_img"
                src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png"
              />
            </div>
            <div className="text_section">
              <p className="cards_title">
                Breaking the Myths around Cybersecurity
              </p>
              <div className="author_container">
                <p className="author">EdYoda</p>
                <p className="date">| 26 Aug 2019</p>
                <p className="cards_text">
                  Cybersecurity plays an integral role in the process of good
                  business models But even cybersecurity programs built good
                  intentions can fall short in front of advanced cyber...
                </p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="cards_imgsection">
              <img
                className="cards_img"
                src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png"
              />
            </div>
            <div className="text_section">
              <p className="cards_title">Importance of Data Bachu...</p>
              <div className="author_container">
                <p className="author">EdYoda</p>
                <p className="date">| 26 Aug 2019</p>
                <p className="cards_text">
                  A bussiness must always introspect the areas where they lack
                  in order to bring about a positive change in the work
                  environment one of the main precautions or a contngency plan
                  th...
                </p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="cards_imgsection">
              <img
                className="cards_img"
                src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png"
              />
            </div>
            <div className="text_section">
              <p className="cards_title">What is Web scrapping?</p>
              <div className="author_container">
                <p className="author">EdYoda</p>
                <p className="date">| 25 Sep 2019</p>
                <p className="cards_text">
                  Simply put web scrapping is one of the tools developers use to
                  gather and analyze information from the internet Some websites
                  and platforms offer application Programming interfaces...
                </p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="cards_imgsection">
              <img
                className="cards_img"
                src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png"
              />
            </div>
            <div className="text_section">
              <p className="cards_title">What is Income Share Aggreement?</p>
              <div className="author_container">
                <p className="author">EdYoda</p>
                <p className="date">| 14 Oct 2019</p>
                <p className="cards_text">
                  The term Income Share Aggreement has been around for a long
                  time since 1955 to be precise Surprised, eh? It was first
                  introduced by Milton Friedman an American economist...
                </p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="cards_imgsection">
              <img
                className="cards_img"
                src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png"
              />
            </div>
            <div className="text_section">
              <p className="cards_title">
                Practical Machine Learning with Python and Keras
              </p>
              <div className="author_container">
                <p className="author">Daniel Pyrathon</p>
                <p className="date">| 16 Oct 2019</p>
                <p className="cards_text">
                  Machine learning is a field of artificial intelligence that
                  uses statistical technologies to give computer systems the
                  ability to "learn"(e.g. progressively improve performance...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
