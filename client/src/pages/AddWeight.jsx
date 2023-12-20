import React, { useState } from "react";
// Axios
import Axios from 'axios';
import { Header } from "../components/Header";

export const AddWeight = () => {

  const [weight, setWeight] = useState(0);
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    addWeight(weight, date);
  }

  const addWeight = async (weight, date) => {
    try {
      Axios.post("http://localhost:5000/fithub/weight", {
        weight: weight,
        dateOfWeight: date,
      });
      alert("success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <Header />
      <section className="m-5 p-5 d-flex flex-column justify-content-center align-items-center">
        <h1>Add Weight</h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form className="card p-5 mt-5" onSubmit={onSubmit}>
                <article className="form-floating mb-3">
                  <input type="number" className="form-control" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                  <label htmlFor="weight">Weight (lbs)</label>
                </article>
                <article className="form-floating mb-3">
                  <input type="date" className="form-control" id="weightDate" value={date} onChange={(e) => setDate(e.target.value)}/>
                  <label htmlFor="weightDate">Date</label>
                </article>
                <button type="submit" className="btn btn-outline-primary">Add</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
