import React from "react";

import "./Blog.css";

// import Test from "../../assets/showcase.jpg";

const about = () => {
  return (
    <div className="Blog">
      <div className="container">
        <div>
          <p className=" text-center h1">My Blog! </p>
          <hr />
        </div>
        <div>
          {/* <p className="h1"> BLOG CONTENT</p> */}
          <section>
            <div className="container">
              <div className="card">
                <div className="row">
                  <div className="col-md-8">
                    <div className="card-block">
                      <h4 className="card-title">
                        Curabitur gravida vestibulum imperdiet.
                      </h4>
                      <p className="card-text">
                        Cras convallis ut turpis vitae facilisis. Morbi eu augue
                        vel quam efficitur rhoncus vitae eget lectus. Cras augue
                      </p>
                      <p className="card-text">
                        Cras convallis ut turpis vitae facilisis. Morbi eu augue
                        vel quam efficitur rhoncus vitae eget lectus. Cras augue
                        ligula, aliquam ut enim ut, feugiat imperdiet sem.Cras
                      </p>
                      <a href="/" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-img-bottom" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default about;
