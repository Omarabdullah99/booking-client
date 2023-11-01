import React, { useState } from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location?.state?.destination);
  const [date, setDate] = useState(location?.state?.date);
  const [openDate, setOpenDate] = useState("false");
  const [option, setOption] = useState(location?.state?.options);

  console.log("listdate", date);

  console.log("list", location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>

            <div className="lsItem">
              <label>Check-in-Date</label>
              {date && (
                <span onClick={() => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}{" "}
                </span>
              )}
              {openDate && (
                <DateRange
                  onChange={(item) => setDate(item.selection)}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adult 
                </span>
                <input type="number" className="lsOptionInput" min={1} placeholder={option.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                 Children 
                </span>
                <input type="number" className="lsOptionInput" min={0} placeholder={option.children}  />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Room 
                </span>
                <input type="number" className="lsOptionInput" min={1} placeholder={option.room} />
              </div>
              </div>
            </div>
            <button>Search</button>
          </div>

          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
