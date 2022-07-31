import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import WhiteBlock from "../../components/UI/Blocks/WhiteBlock";
import { Link } from "react-router-dom"
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
  doj: "31-10-2022",
  bookingDate: "04-07-2022",
  quota: "GN",
  destinationDoj: "31-10-2022",
  sourceDoj: "31-10-2022",
  from: "MS",
  reservationUpto: "TBM",
  boardingPoint: "MS",
  getclass: "2S",
  chartPrepared: "false",
  boardingStationName: "Chennai Egmore",
  trainStatus: "",
  trainCancelledFlag: "false",
  reservationUptoName: "Tambaram",
  passengerCount: "1",
  passengerStatus: [
    {
      Pnr: null,
      Number: 1,
      Prediction: null,
      PredictionPercentage: 100,
      ConfirmTktStatus: "Confirm",
      Coach: "D1",
      Berth: 49,
      BookingStatus: "CNF D1 49",
      CurrentStatus: "CNF",
      CoachPosition: null,
      BookingBerthNo: 49,
      BookingCoachId: "D1",
      BookingStatusNew: "CNF",
      BookingStatusIndex: 0,
      CurrentBerthNo: null,
      CurrentCoachId: null,
      BookingBerthCode: "WS",
      CurrentBerthCode: null,
      CurrentStatusNew: "CNF",
      CurrentStatusIndex: 0,
    },
  ],
  cacheTime: "2022-07-30T02:54:15.2754234+05:30",
  error: "null",
  departureTime: "18:10",
  arrivalTime: "18:43",
  expectedPlatformNo: "5",
  bookingFare: "45",
  ticketFare: "45",
  coachPosition: "null",
  rating: "3.7",
  foodRating: "3.1",
  punctualityRating: "4.2",
  cleanlinessRating: "3.8",
  sourceName: "null",
  destinationName: "null",
  duration: "0:33",
  ratingCount: "69",
  hasPantry: "false",
};

const Results = ({ data = tempData}) => {

  const refreshPage = ()=>{
     window.location.reload();
  }

  return data === undefined || data === null ? (
    <WhiteBlock>
      <p className="m-0">The are no data</p>
    </WhiteBlock>
  ) : (
    <div className="row m-0">
      
      <WhiteBlock>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="d-flex mb-4">
              <h2 className="m-0">PNR : {data.pnr || "No PNR"}</h2>
            </div>
            <div className="d-flex mb-2">
              <h4 className="m-0">
                {data.trainNo || "No train Number"} -{" "}
                {data.trainName || "No train name"}
              </h4>
              <button className="btn btn-info btn-sm ms-3">
                <FontAwesomeIcon icon={faStar} /> {data.rating || "No rating"}
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <ul className="list-style-none p-0">
              <li className="m-2">
                <FontAwesomeIcon icon={faRightFromBracket} className="mx-2" />
                {data.boardingStationName || "No boarding station name"} -{" "}
                {data.boardingPoint || "No boarding point"}
                {", "}
                {data.departureTime || "No departure time"}
              </li>
              <li className="m-2">
                <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
                {data.reservationUptoName || "No reservation name"} -{" "}
                {data.reservationUpto || "No reservation point"}
                {", "}
                {data.arrivalTime || "No arrival time"}
              </li>
              <hr />
              <li className="m-2">
                <FontAwesomeIcon icon={faCalendarDays} className="mx-2" />
                {data.doj || "No DOJ"}
              </li>
              <li className="m-2">
                <FontAwesomeIcon icon={faInfoCircle} className="mx-2" />
                {data.getclass || "No class"} | {data.quota || "No quota"} |
                Expected platform :{" "}
                {data.expectedPlatformNo || "No platform number"}
              </li>
            </ul>
          </div>
        </div>
      </WhiteBlock>
      <WhiteBlock>
        <div className="d-flex justify-content-between">
          <h2 className="m-0">Passenger Status</h2>
          <div>
            <h4>
              {data.chartPrepared === "false"
                ? "Chart not prepared"
                : "Chart prepared"}
            </h4>
            <button className="btn" onClick={refreshPage}>
              Reload now
              <FontAwesomeIcon
                icon={faArrowRotateLeft}
                style={{ color: "green" }}
                className="mx-2"
              />
            </button>
          </div>
        </div>
        <hr />
        {data.passengerStatus?.map((passenger, i) => {
          return (
            <Fragment key={i}>
              {i > 0 && <hr />}
              <div className="row">
                <div className="col-6 col-sm-6 col-lg-2 mb-4 mb-lg-0">
                  <h6 className="text-muted">S. No</h6>
                  <h4 className="m-0">{passenger.Number || "-"}</h4>
                </div>
                <div className="col-6 col-sm-6 col-lg-3">
                  <h6 className="text-muted">Current Status </h6>
                  <h4 className="m-0 text-success">
                    {passenger.CurrentStatus || "-"}
                  </h4>
                </div>
                <div className="col-6 col-sm-6 col-lg-4">
                  <h6 className="text-muted">Booking Status </h6>
                  <h4 className="m-0"> {passenger.BookingStatus || "-"} </h4>
                </div>
                <div className="col-6 col-sm-6 col-lg-3">
                  <h6 className="text-muted">Coach Position</h6>
                  <h4 className="m-0">{passenger.coachPosition || "-"}</h4>
                </div>
              </div>
            </Fragment>
          );
        })}
      </WhiteBlock>
      {/* <WhiteBlock>
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
      </WhiteBlock> */}

      <WhiteBlock>
        <div className="row">
          <Link to="/404" className="col-6 col-lg-3 d-flex align-items-center btn btn-lg">
            <FontAwesomeIcon size="lg" icon={faTrainSubway} className="me-2" />
            <h5 className="m-0">Running Status</h5>
          </Link>
          <Link to="/404" className="col-6 col-lg-3 d-flex align-items-center btn btn-lg">
            <FontAwesomeIcon size="lg" icon={faRoute} className="me-2" />
            <h5 className="m-0">Train Schedule</h5>
          </Link>
          <Link to="/404" className="col-6 col-lg-3 d-flex align-items-center btn btn-lg">
            <FindInPageIcon className="me-2" />
            <h5 className="m-0">Coach Position</h5>
          </Link>
          <Link to="/404" className="col-6 col-lg-3 d-flex align-items-center btn btn-lg">
            <AirlineSeatReclineExtra className="me-2" />
            <h5 className="m-0">Seat Layout</h5>
          </Link>
        </div>
      </WhiteBlock>
      {/* <WhiteBlock>
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
      </WhiteBlock> */}
    </div>
  );
};

export default Results;
