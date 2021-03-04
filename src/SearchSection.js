import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchSection() {
  let [city, setCity] = useState("");
  function searchCity(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="SearchSection search-section">
      <form onSubmit={searchCity}>
        <div className="row">
          <div className="col-7">
            <input
              type="search"
              onChange={updateCity}
              placeholder="Enter a city, please"
              className="form-control"
              autocomplete="off"
              autofocus
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn search-btn px-4">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn search-btn px-4"
              title="Button not working yet"
            >
              <strong>Current</strong>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
