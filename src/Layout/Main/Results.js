import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import WhiteBlock from "../../components/UI/Blocks/WhiteBlock";
import {
  faStar,
  faRightFromBracket,
  faRightToBracket,
  faCalendarDays,
  faInfoCircle,
  faTrainSubway,
  faRoute,
  faArrowAltCircleRight,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { AirlineSeatReclineExtra } from "@mui/icons-material";
import FindInPageIcon from "@mui/icons-material/FindInPage";

const tempData = {
  pnr: null,
  trainNo: null,
  trainName: null,
  doj: null,
  bookingDate: null,
  quota: null,
  destinationDoj: null,
  sourceDoj: null,
  from: null,
  reservationUpto: null,
  boardingPoint: null,
  getclass: null,
  chartPrepared: null,
  boardingStationName: null,
  trainStatus: null,
  trainCancelledFlag: null,
  reservationUptoName: null,
  passengerCount: null,
  passengerStatus: null,
  cacheTime: null,
  error: null,
  departureTime: null,
  arrivalTime: null,
  expectedPlatformNo: null,
  bookingFare: null,
  ticketFare: null,
  coachPosition: null,
  rating: null,
  foodRating: null,
  punctualityRating: null,
  cleanlinessRating: null,
  sourceName: null,
  destinationName: null,
  duration: null,
  ratingCount: null,
  hasPantry: null,
};

const Results = ({ data = tempData }) => {
  return data.length === 0 ? (
    <WhiteBlock>
      <p className="m-0">The are no data</p>
    </WhiteBlock>
  ) : (
    <div className="row m-0">
      <WhiteBlock>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="d-flex mb-4">
              <h2 className="m-0">PNR : 4753150809</h2>
              <button className="btn btn-outline-success ms-3">CHANGE</button>
            </div>
            <div className="d-flex mb-2">
              <h4 className="m-0">16115 - MS PDY EXPRESS</h4>
              <button className="btn btn-success btn-sm ms-3">
                <FontAwesomeIcon icon={faStar} /> 3.7{" "}
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <ul className="list-style-none p-0">
              <li className="m-2">
                <FontAwesomeIcon icon={faRightFromBracket} className="mx-2" />
                Chennai Egmore - MS, 18:10
              </li>
              <li className="m-2">
                <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
                Tambaram - TBM, 18:43
              </li>
              <hr />
              <li className="m-2">
                <FontAwesomeIcon icon={faCalendarDays} className="mx-2" />
                Mon, 31 Oct
              </li>
              <li className="m-2">
                <FontAwesomeIcon icon={faInfoCircle} className="mx-2" />
                2S | GN | Expected platform : 5
              </li>
            </ul>
          </div>
        </div>
      </WhiteBlock>
      <WhiteBlock>
        <div className="d-flex justify-content-between">
          <h2 className="m-0">Passenger Status</h2>
          <div>
            <h4>Chart Not Prepared</h4>
            <div className="d-flex align-items-center">
              <p className="m-0">Just now</p>
              <FontAwesomeIcon
                icon={faArrowRotateLeft}
                style={{ color: "green" }}
                className="mx-2"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mb-lg-0">
            <h5 className="text-muted">S. No</h5>
            <h4 className="m-0">1</h4>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="text-muted">Current Status </h5>
            <h4 className="m-0 text-success">CNF</h4>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <h5 className="text-muted">Booking Status </h5>
            <h4 className="m-0">CNF D1 49 </h4>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="text-muted">Coach Position</h5>
            <h4 className="m-0">-</h4>
          </div>
        </div>
      </WhiteBlock>
      <WhiteBlock>
        <div className="row">
          <div className="col-12 col-lg-7 mb-3 m-lg-0">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <FontAwesomeIcon
                  size="lg"
                  icon={faTrainSubway}
                  className="me-2"
                />
                <h5 className="m-0 flex-grow-1">Book a return ticket</h5>
                <button className="btn btn-success">Book Now</button>
              </div>
              <hr className="my-3" />
              <div className="col-12 d-flex justify-content-between align-items-center">
                <FontAwesomeIcon
                  size="lg"
                  icon={faTrainSubway}
                  className="me-2"
                />
                <h5 className="m-0 flex-grow-1">For Faster Experience </h5>
                <button className="btn btn-success">Download Now</button>
              </div>
            </div>
          </div>
          <button className="col-12 col-lg-4 btn  btn-warning offset-lg-1 d-flex justify-content-between align-items-center">
            <FontAwesomeIcon size="lg" icon={faTrainSubway} className="me-2" />
            <h5 className="m-0">IRCTC Food Booking</h5>
            <FontAwesomeIcon
              size="lg"
              icon={faArrowAltCircleRight}
              className="mx-2"
            />
          </button>
        </div>
      </WhiteBlock>

      <WhiteBlock>
        <div className="row">
          <div className="col-6 col-lg-3 d-flex align-items-center">
            <FontAwesomeIcon size="lg" icon={faTrainSubway} className="me-2" />
            <h5 className="m-0">Running Status</h5>
          </div>
          <div className="col-6 col-lg-3 d-flex align-items-center">
            <FontAwesomeIcon size="lg" icon={faRoute} className="me-2" />
            <h5 className="m-0">Train Schedule</h5>
          </div>
          <div className="col-6 col-lg-3 d-flex align-items-center">
            <FindInPageIcon className="me-2" />
            <h5 className="m-0">Coach Position</h5>
          </div>
          <div className="col-6 col-lg-3 d-flex align-items-center">
            <AirlineSeatReclineExtra className="me-2" />
            <h5 className="m-0">Running Status</h5>
          </div>
        </div>
      </WhiteBlock>
      <WhiteBlock>
        <div className="d-flex align-items-center mb-4">
          <div
            style={{
              backgroundColor: "#5db85b",
              width: 25,
              height: 25,
              borderRadius: "50%",
              marginRight: 10,
            }}
          ></div>
          <h5 className="m-0">Very High confirmation chances( &gt; 70%).</h5>
        </div>
        <div className="d-flex align-items-center mb-4">
          <div
            style={{
              backgroundColor: "#efad4e",
              width: 25,
              height: 25,
              borderRadius: "50%",
              marginRight: 10,
            }}
          ></div>
          <h5 className="m-0">Medium confirmation chances( 30-70% ).</h5>
        </div>
        <div className="d-flex align-items-center mb-4">
          <div
            style={{
              backgroundColor: "#d8544f",
              width: 25,
              height: 25,
              borderRadius: "50%",
              marginRight: 10,
            }}
          ></div>
          <h5 className="m-0">Very Low Confirmation chances( &lt; 30%).</h5>
        </div>
        <p className="mt-3 mb-0">
          * RAC will be considered as confirm while predicting.
        </p>
      </WhiteBlock>
    </div>
  );
};

export default Results;
