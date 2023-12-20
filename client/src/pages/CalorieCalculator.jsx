import React, { useState } from "react";
import { Header } from "../components/Header";

export const CalorieCalculator = () => {
  const [gender, setGender] = useState("male");
  const [tdee, setTdee] = useState(null);
  const [bmrData, setBmrData] = useState({
    age: 18,
    weight: 55,
    height: 180,
    activityLvl: 1.25,
  });

  console.log(bmrData.activityLvl);

  const changeHandler = (e) => {
    setBmrData({
      ...bmrData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let bmr = calculateBMR(bmrData.age, bmrData.weight, bmrData.height, gender);
    let tdee = calculateTDEE(bmr, bmrData.activityLvl);

    setTdee(Math.floor(tdee));
  };

  const calculateBMR = (age, weight, height, gender) => {
    let bmr;

    if (gender === "male") {
      bmr =
        88.362 +
        13.397 * parseFloat(weight) +
        4.799 * parseFloat(height) -
        5.677 * parseFloat(age);
    } else {
      bmr =
        447.593 +
        9.247 * parseFloat(weight) +
        3.098 * parseFloat(height) -
        4.33 * parseFloat(age);
    }

    return bmr;
  };

  const calculateTDEE = (bmr, activityLvl) => {
    return bmr * activityLvl;
  };

  return (
    <section>
      <Header />

      <section className="m-5 p-5 d-flex flex-column justify-content-center align-items-center">
        <h1>Calculate Calories</h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form className="card p-5 mt-5" onSubmit={onSubmit}>
                <article className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    name="age"
                    max={80}
                    min={15}
                    value={bmrData.age}
                    onChange={changeHandler}
                  />
                  <label htmlFor="age">Age (15-80)</label>
                </article>
                <article className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="weight"
                    name="weight"
                    value={bmrData.weight}
                    onChange={changeHandler}
                  />
                  <label htmlFor="weight">Weight (kg)</label>
                </article>
                <article className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="height"
                    name="height"
                    value={bmrData.height}
                    onChange={changeHandler}
                  />
                  <label htmlFor="height">Height (cm)</label>
                </article>
                <div className="d-flex justify-content-evenly align-items-center mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value={gender}
                      onChange={() => setGender("male")}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value={gender}
                      onChange={() => setGender("female")}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <select
                    className="form-select mb-3 shadow-none"
                    id="activity-lvl"
                    name="activityLvl"
                    value={bmrData.activityLvl}
                    onChange={changeHandler}
                  >
                    <option value="1.25">
                      I am sedentary (little or no exercise)
                    </option>
                    <option value="1.375">
                      I am lightly active (light exercise 1-3 days/week)
                    </option>
                    <option value="1.55">
                      I am moderately active (moderate exercise 3-5 days/week)
                    </option>
                    <option value="1.725">
                      I am very active (hard exercise 6-7 days/week
                    </option>
                  </select>
                  <label className="form-label" htmlFor="activity-lvl">
                    Activity Level
                  </label>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Calculate
                </button>
              </form>
            </div>
          </div>
        </div>

        <p>Your TDEE is: {tdee} calories</p>
      </section>
    </section>
  );
};
