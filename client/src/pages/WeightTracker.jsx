import React, { useState, useEffect } from "react";
// CHART JS
import "chart.js/auto";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { LineChart } from "../components/LineChart";
// bootstrap spinner
import Spinner from "react-bootstrap/Spinner";
// Axios
import Axios from "axios";
// component
import { Header } from "../components/Header";
import { BarChart } from "../components/BarChart";

Chart.register(CategoryScale);

export const WeightTracker = () => {
  const [weight, setWeight] = useState([{}]);
  // loading
  const [loading, setLoading] = useState(false);
  // data option
  const [option, setOption] = useState("table");

  useEffect(() => {
    setLoading(true);
    getWeight();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // get weight
  const getWeight = async () => {
    const result = await fetch("http://localhost:5000/fithub/weight");
    const data = await result.json();
    setWeight(data);
  };

  // delete weight
  const deleteWeight = async (id) => {
    try {
      await Axios.delete(`http://localhost:5000/fithub/weight/${id}`);
      await filterWeight(id);
    } catch (error) {
      console.log(error);
    }
  };

  // loading func
  const onDemandLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // filter weight
  const filterWeight = async (id) => {
    setWeight((weights) => weights.filter((temp) => temp._id !== id));
  };

  return (
    <section className="weight-tracker">
      <Header />
      <div className="d-flex justify-content-center align-items-center m-5 p-5">
        <div>
          <h1>Display Options</h1>
          <div className="d-flex justify-content-center align-items-center m-5 p-5">
            <button
              className="btn btn-outline-primary me-1 ms-1"
              onClick={() => {
                setOption("table");
                onDemandLoading();
              }}
            >
              Table
            </button>
            <button
              className="btn btn-outline-primary me-1 ms-1"
              onClick={() => {
                setOption("linechart");
                onDemandLoading();
              }}
            >
              Line Chart
            </button>
            <button
              className="btn btn-outline-primary me-1 ms-1"
              onClick={() => {
                setOption("barchart");
                onDemandLoading();
              }}
            >
              Bar Chart
            </button>
          </div>
          {loading ? (
            <div>
              <Spinner
                animation="border"
                role="status"
                variant="primary"
                size="lg"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <>
              {option === "linechart" ? (
                <LineChart weight={weight} />
              ) : option === "table" ? (
                <div>
                  <h2>User Weight</h2>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Weight (lbs)</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weight.map((val, key) => {
                        return (
                          <tr key={key}>
                            <td>{val?.weight}</td>
                            <td>{val?.dateOfWeight?.slice(0, 10)}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => deleteWeight(val?._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <BarChart weight={weight} />
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
