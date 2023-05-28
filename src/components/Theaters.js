import React from "react";

const Theaters = ({ data }) => {
  console.log(data);
  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header">
          <h2>Theaters</h2>
        </div>
        {data.theatre.map((theatre) => (
          <div className="card-body" key={theatre.theatre_name}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={theatre.thumbnail_url}
                    className="img-fluid rounded-start"
                    alt="theatre_img"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <div className="row">
                        <div className="col-md-10">
                          <a href={theatre.website}>{theatre.theatre_name}</a>
                        </div>
                        <div className="col-md-2 float-right text-end">
                          ⭐ {theatre.customer_rating}
                        </div>
                      </div>
                    </h5>
                    <p class="card-text">
                      <small class="text-muted">{theatre.address}</small>
                    </p>
                    <hr />
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-success mb-3">
                          <div
                            className="card-header text-truncate"
                            title={theatre.show1_movie}
                          >
                            {theatre.show1_movie}
                          </div>
                          <div className="card-body text-success text-center">
                            <h5 className="card-title">{theatre.show1_time}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-success mb-3">
                          <div
                            className="card-header text-truncate"
                            title={theatre.show2_movie}
                          >
                            {theatre.show2_movie}
                          </div>
                          <div className="card-body text-success text-center">
                            <h5 className="card-title">{theatre.show2_time}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-success mb-3">
                          <div
                            className="card-header text-truncate"
                            title={theatre.show3_movie}
                          >
                            {theatre.show3_movie}
                          </div>
                          <div className="card-body text-success text-center">
                            <h5 className="card-title">{theatre.show3_time}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-success mb-3">
                          <div
                            className="card-header text-truncate"
                            title={theatre.show4_movie}
                          >
                            {theatre.show4_movie}
                          </div>
                          <div className="card-body text-success text-center  ">
                            <h5 className="card-title">{theatre.show4_time}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theaters;
