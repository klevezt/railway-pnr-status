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
  faGaugeHigh,
  faReplyAll,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { AirlineSeatReclineExtra } from "@mui/icons-material";
import FindInPageIcon from "@mui/icons-material/FindInPage";

const tempData = {
  pnr: "4753150809",
  trainNo: "16115",
  trainName: "MS PDY EXPRESS",
  doj: "Mon, 31 Oct",
  bookingDate: null,
  quota: null,
  destinationDoj: "Tambaram - TBM",
  sourceDoj: "Chennai Egmore - MS",
  from: null,
  reservationUpto: "Chennai Egmore - MS",
  boardingPoint: null,
  getclass: "2S",
  chartPrepared: "Chart Not Prepared",
  boardingStationName: "Chennai Egmore - MS",
  trainStatus: null,
  trainCancelledFlag: null,
  reservationUptoName: null,
  passengerCount: null,
  passengerStatus: "CNF",
  cacheTime: null,
  error: null,
  departureTime: "18:43",
  arrivalTime: "18:10",
  expectedPlatformNo: "5",
  bookingFare: null,
  ticketFare: null,
  coachPosition: "D1",
  rating: "3.7",
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
              <h2 className="m-0">PNR : {data.pnr}</h2>
              <button className="btn btn-outline-success ms-3">CHANGE</button>
            </div>
            <div className="d-flex mb-2">
              <h4 className="m-0">
                {data.trainNo} - {data.trainName}
              </h4>
              <button className="btn btn-success btn-sm ms-3">
                <FontAwesomeIcon icon={faStar} /> {data.rating}
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <ul className="list-style-none p-0">
              <li className="m-2">
                <FontAwesomeIcon icon={faRightFromBracket} className="mx-2" />
                {data.sourceDoj}
                {", "}
                {data.arrivalTime}
              </li>
              <li className="m-2">
                <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
                {data.destinationDoj}
                {", "}
                {data.departureTime}
              </li>
              <hr />
              <li className="m-2">
                <FontAwesomeIcon icon={faCalendarDays} className="mx-2" />
                {data.doj}
              </li>
              <li className="m-2">
                <FontAwesomeIcon icon={faInfoCircle} className="mx-2" />
                {data.getclass} | GN | Expected platform :
                {data.expectedPlatformNo}
              </li>
            </ul>
          </div>
        </div>
      </WhiteBlock>
      <WhiteBlock>
        <div className="d-flex justify-content-between">
          <h2 className="m-0">Passenger Status</h2>
          <div>
            <h4>{data.chartPrepared}</h4>
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
          <div className="col-6 col-sm-6 col-lg-2 mb-4 mb-lg-0">
            <h6 className="text-muted">S. No</h6>
            <h4 className="m-0">1</h4>
          </div>
          <div className="col-6 col-sm-6 col-lg-3">
            <h6 className="text-muted">Current Status </h6>
            <h4 className="m-0 text-success">{data.passengerStatus}</h4>
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <h6 className="text-muted">Booking Status </h6>
            <h4 className="m-0">CNF {data.coachPosition} 49 </h4>
          </div>
          <div className="col-6 col-sm-6 col-lg-3">
            <h6 className="text-muted">Coach Position</h6>
            <h4 className="m-0">{data.coachPosition}</h4>
          </div>
        </div>
      </WhiteBlock>
      <WhiteBlock>
        <div className="row">
          <div className="col-12 col-lg-7 mb-3 m-lg-0">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <FontAwesomeIcon size="lg" icon={faReplyAll} className="me-2" />
                <h5 className="m-0 flex-grow-1">Book a return ticket</h5>
                <button className="btn btn-success">Book Now</button>
              </div>
              <hr className="my-3" />
              <div className="col-12 d-flex justify-content-between align-items-center">
                <FontAwesomeIcon
                  size="lg"
                  icon={faGaugeHigh}
                  className="me-2"
                />
                <h5 className="m-0 flex-grow-1">For Faster Experience </h5>
                <button className="btn btn-success">Download Now</button>
              </div>
            </div>
          </div>
          <button className="col-12 col-lg-4 btn  btn-warning offset-lg-1 d-flex justify-content-between align-items-center">
            <FontAwesomeIcon size="lg" icon={faUtensils} className="me-2" />
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
          <button className="col-6 col-lg-3 d-flex align-items-center btn btn-lg">
            <FontAwesomeIcon size="lg" icon={faTrainSubway} className="me-2" />
            <h5 className="m-0">Running Status</h5>
          </button>
          <button className="col-6 col-lg-3 d-flex align-items-center btn btn-lg">
            <FontAwesomeIcon size="lg" icon={faRoute} className="me-2" />
            <h5 className="m-0">Train Schedule</h5>
          </button>
          <button className="col-6 col-lg-3 d-flex align-items-center btn btn-lg">
            <FindInPageIcon className="me-2" />
            <h5 className="m-0">Coach Position</h5>
          </button>
          <button className="col-6 col-lg-3 d-flex align-items-center btn btn-lg">
            <AirlineSeatReclineExtra className="me-2" />
            <h5 className="m-0">Seat Layout</h5>
          </button>
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
