import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import dayjs from "dayjs";

const Movie = ({ userMailId, data }) => {
  const [movieData, setMovieData] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [message, setMessage] = useState("");
  const [bookedSeats, setBookedSeats] = useState([1, 2, 3]);
  //   console.log(data);

  var { movieDetails } = useParams();
  movieDetails = movieDetails.slice(1);
  const movieDetailsArray = movieDetails.split("&");
  useEffect(() => {
    setMovieData({
      show_time: movieDetailsArray[2],
      movie_name: movieDetailsArray[0],
      theatre_name: movieDetailsArray[1],
      booked_seats: [],
      date: "14/06/2023",
      user_mail_id: userMailId,
    });
    setSubmitFlag(false);

    data.theatre.map((t) => {
      if (
        t.theatre_name === movieData.theatre_name &&
        t.show1_movie === movieData.movie_name &&
        t.show1_time === movieData.show_time
      ) {
        t.booked_seats.map((bs) => {
          //   console.log(bs.show1_booked_seats)
          setBookedSeats([...bookedSeats, ...eval(bs.show1_booked_seats)]);
        });
        console.log("booked seats", t.booked_seats);
        return null;
      }
      if (
        t.theatre_name === movieData.theatre_name &&
        t.show2_movie === movieData.movie_name &&
        t.show2_time === movieData.show_time
      ) {
        t.booked_seats.map((bs) => {
          //   console.log(bs.show1_booked_seats)
          setBookedSeats([...bookedSeats, ...eval(bs.show2_booked_seats)]);
        });
        console.log("booked seats", t.booked_seats);
        return null;
      }
      if (
        t.theatre_name === movieData.theatre_name &&
        t.show3_movie === movieData.movie_name &&
        t.show3_time === movieData.show_time
      ) {
        t.booked_seats.map((bs) => {
          //   console.log(bs.show1_booked_seats)
          setBookedSeats([...bookedSeats, ...eval(bs.show3_booked_seats)]);
        });
        console.log("booked seats", t.booked_seats);
        return null;
      }
      if (
        t.theatre_name === movieData.theatre_name &&
        t.show4_movie === movieData.movie_name &&
        t.show4_time === movieData.show_time
      ) {
        t.booked_seats.map((bs) => {
          //   console.log(bs.show1_booked_seats)
          setBookedSeats([...bookedSeats, ...eval(bs.show4_booked_seats)]);
        });
        console.log("booked seats", t.booked_seats);
        return null;
      }

      //   console.log("t", t);
      return null;
    });
  }, []);

  const handleChange = (e) => {
    var targetValue = Number(e.target.value);
    if (!selectedSeats.includes(targetValue)) {
      setSelectedSeats([...selectedSeats, targetValue]);
    }
    if (!e.target.checked) {
      if (selectedSeats.includes(targetValue)) {
        setSelectedSeats(
          selectedSeats.filter((seat) => {
            return seat !== targetValue;
          })
        );
      }
    }
  };

  const handleDateChange = (e) => {
    setMovieData({
      ...movieData,
      date: dayjs(e.target.value).format("DD/MM/YYYY"),
    });
  };

  const handleClick = () => {
    setMovieData({ ...movieData, booked_seats: selectedSeats });
    setSubmitFlag(true);
    // setBookedSeats([...selectedSeats]);
    // setSelectedSeats([]);
  };

  useEffect(() => {
    var requestOptions = {
      method: "POST",
      body: JSON.stringify(movieData),
    };
    setTimeout(() => {
      fetch(
        "https://zincubate.in/api/MovieTicketChecker?action=bookSeats",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setMessage(JSON.stringify(result.message)))
        .catch((error) => console.log("error", error));
    }, 300);
  }, [submitFlag]);

  //   console.log(movieData);
  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header">
          <h2>Movie Name: {movieData["movie_name"]}</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <h4>{movieData["theatre_name"]}</h4>
            </div>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                id="dateInput"
                onChange={handleDateChange}
              />
            </div>
            <div className="col-4" style={{ textAlign: "end" }}>
              <h6>{movieData["show_time"]}</h6>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center">Screen This Way</div>
          <div className="card-body" style={{ paddingLeft: "30px" }}>
            {  [...Array(100)].map((value, index) => {
              if (bookedSeats.includes(index + 1)) {
                return (
                  <div
                    className="form-check form-check-inline"
                    style={{ padding: "45px" }}
                    key={index + 1}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={index + 1}
                      onChange={handleChange}
                      disabled
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      {index + 1}
                    </label>
                  </div>
                );
              } else {
                return (
                  <div
                    className="form-check form-check-inline"
                    style={{ padding: "45px" }}
                    key={index + 1}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={index + 1}
                      onChange={handleChange}
                      //   disabled
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      {index + 1}
                    </label>
                  </div>
                );
              }
            })}

            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Book Tickets
              </button>
            </div>
            {message.includes("successfully") && (
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">{message}</h4>
                <Link to="/" className="btn btn-info">
                  Back to theatres
                </Link>
              </div>
            )}
            {message.includes("Invalid request") && (
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">{message}</h4>
                <Link to="/" className="btn btn-info">
                  Back to theatres
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
