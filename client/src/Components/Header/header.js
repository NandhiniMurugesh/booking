





import React, { useState } from 'react';

import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTowerObservation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';



const Header = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({ adult: 0, children: 0, room: 0 });
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => ({ ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1 }));
  };

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };
  const handleflight = () => {
    navigate('/flight');
  };
  const handlecar = () => {
    navigate('/car');
  };
 
  const handlehotel = () => {
    navigate('/hotels');
  };

  return (
    <>
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          {/* {[faBed, faCalendarDays, faPerson].map((icon, index) => (
            <div key={index} className={`headerListItem ${index === 0 && 'active'}`}>
              <FontAwesomeIcon icon={icon} />
              <span>{index === 0 ? 'Stays' : index === 1 ? 'Flights' : 'Attractions'}</span>
            </div>
          ))} */}
         
         <nav class="navbar ">
  <form class="container-fluid justify-content-start">
 
    <button onclick={handlehotel} class="btn btn-outline-light me-2" type="button"><FontAwesomeIcon icon={faBed} />  Stays</button>
   <button onClick={handleflight} class="btn btn-outline-light me-2" type="button"><FontAwesomeIcon icon={faPlane} /> Flights</button>
    <button onClick={handlecar} class="btn btn-outline-light me-2" type="button"><FontAwesomeIcon icon={faCar} /> Car Rentals</button>

  </form>
</nav>

        </div>
        <h1 className="headerTitle"><Typewriter
  options={{
    strings: ['Find your next stay'],
    autoStart: true,
    loop: true,
  }}
/></h1>
        <p className="headerDesc">
        <Typewriter
  options={{
    strings: [' Find low prices on hotels,homes and much more...'],
    autoStart: true,
    loop: true,
  }}
/>
        
        </p>
        <div className="headerSearch text-wrap">
  <div className="col-2 col-md-2 col-lg-2 col-sm-1">
    <div className="headerSearchItem ">
      <FontAwesomeIcon icon={faBed} className="headerIcon" />
      <input
        type="text"
        placeholder="Where to go?"
        className="headerSearchInput text-wrap"
       
        onChange={(e) => setDestination(e.target.value)}
      />
    </div>
  </div>
  <div className="col-4 col-md-2 col-lg-4 col-sm-2">
    <div className="headerSearchItem">
      <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
      <span onClick={() => setOpenDate(!openDate)} className="headerSearchText"  >
        {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')} ` }
       
      </span>
      {openDate && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
         
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="date"
          minDate={new Date()}
        />
      )}
    </div>
  </div>
  <div className="col-4 col-md-2 col-lg-2 col-sm-2">
    <div className="headerSearchItem">
      <FontAwesomeIcon icon={faPerson} className="headerIcon" />
      <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
        {`${options.adult} Adult · ${options.children} Children · ${options.room} Room`}
      </span>
      {openOptions && (
        <div className="options">
          {['Adult', 'Children', 'Room'].map((text, index) => (
            <div key={index} className="optionItem">
              <span className="optionText">{text}</span>
              <div className="optionCounter">
                <button
                  disabled={options[text.toLowerCase()] <= 1}
                  className="optionCounterButton"
                  onClick={() => handleOption(text.toLowerCase(), 'd')}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options[text.toLowerCase()]}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption(text.toLowerCase(), 'i')}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  <div className="col-md-2 col-lg-2 col-sm-1">
    <div className="headerSearchItem ">
      <button className="headerBtn tec=xt-wrap" onClick={handleSearch}>
        Search
      </button>
    </div>
  </div>
</div>

        {/* <button className="headerBtn">Sign in / Register</button> */}
        {/* <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
              {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
              {`${options.adult} adult · ${options.children} children · ${options.room} room`}
            </span>
            {openOptions && (
              <div className="options">
                {['Adult', 'Children', 'Room'].map((text, index) => (
                  <div key={index} className="optionItem">
                    <span className="optionText">{text}</span>
                    <div className="optionCounter">
                      <button
                        disabled={options[text.toLowerCase()] <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption(text.toLowerCase(), 'd')}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">{options[text.toLowerCase()]}</span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption(text.toLowerCase(), 'i')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div> */}
      </div>
    </div>
    </>
  );
};

export default Header;
