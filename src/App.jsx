import React, { useState } from "react";
import styled from "styled-components";
import Arrow from "./assets/images/Arrow";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const [ageInDay, setAgeInDay] = useState("--");
  const [ageInMonth, setAgeInMonth] = useState("--");
  const [ageInYear, setAgeInYear] = useState("--");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!day || !month || !year) {
      toast.error("please provide value!");
      setError("This field is required!");
      return;
    }
    setError("");

    if (day > 31 || month > 12 || year > 2024) {
      toast.error("Invalid input");
      setError("Must be a valid input");
      setDay("");
      setMonth("");
      setYear("");
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageInMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageInDays = currentDate.getDate() - birthDate.getDate();

    if (ageInMonths < 0 || (ageInMonths === 0 && ageInDays < 0)) {
      ageInYears--;
      ageInMonths += 12;
    }
    if (ageInDays < 0) {
      ageInMonths--;
      const lastMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      ageInDays += lastMonthDate.getDate();
    }
    setAgeInDay(ageInDays);
    setAgeInMonth(ageInMonths);
    setAgeInYear(ageInYears);
    return;
  };
  return (
    <Wrapper className="container ff-poppins fw-400 text-black">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <div className="form-control">
            <label
              htmlFor="day"
              className={
                error
                  ? "day text-red uppercase fw-600"
                  : "day text-gray uppercase fw-600"
              }
            >
              day
            </label>
            <input
              type="number"
              className="form-input fw-700"
              placeholder="DD"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
            <span className="text-red">{error}</span>
          </div>
          <div className="form-control">
            <label
              htmlFor="month"
              className={
                error
                  ? "month text-red uppercase fw-600"
                  : "month text-gray uppercase fw-600"
              }
            >
              month
            </label>
            <input
              type="number"
              className="form-input fw-700"
              placeholder="MM"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            <span className="text-red">{error}</span>
          </div>
          <div className="form-control">
            <label
              htmlFor="year"
              className={
                error
                  ? "year text-red uppercase fw-600"
                  : "year text-gray uppercase fw-600"
              }
            >
              year
            </label>
            <input
              type="number"
              className="form-input fw-700"
              placeholder="YYYY"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <span className="text-red">{error}</span>
          </div>
        </div>
        <div className="btn-container">
          <hr />
          <button className="btn">
            <Arrow />
          </button>
        </div>
      </form>
      <section>
        <h1>
          <span className="text-purple">{ageInYear}</span> year
          {ageInYear <= 1 ? "" : "s"}
        </h1>
        <h1>
          <span className="text-purple">{ageInMonth}</span> month
          {ageInMonth <= 1 ? "" : "s"}
        </h1>
        <h1>
          <span className="text-purple">{ageInDay}</span> day
          {ageInDay <= 1 ? "" : "s"}
        </h1>
      </section>
      <ToastContainer position="top-center" />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  span {
    white-space: nowrap;
    font-size: 9px;
  }
  .btn {
    background: var(--Purple);
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    padding: 1rem;
    z-index: 2;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  hr {
    width: 100%;
    position: absolute;
    margin-top: 1.5rem;
    z-index: 1;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-top: 2rem;
  }
  section > h1,
  section > h1 > span {
    font-size: 3.7rem;
    font-weight: 800;
  }
  @media screen and (min-width: 800px) {
    section > h1,
    section > h1 > span {
      font-size: 5rem;
      font-weight: 1500;
      margin-bottom: -2rem;
    }
    .btn-container {
      align-items: end;
    }
    hr {
      margin-top: 2.2rem;
    }
  }
`;

export default App;
