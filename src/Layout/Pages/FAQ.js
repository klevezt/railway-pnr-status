import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import WhiteBlock from "../../components/UI/Blocks/WhiteBlock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <>
      <WhiteBlock className="text-center">
        <strong>FREQUENLY ASKED QUESTIONS</strong>
      </WhiteBlock>
      <WhiteBlock>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="m-0">What is a PNR?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              PNR - Passenger Name Record is an unique number that recognizes
              your booking. PNR is a travel record of an individual or a group
              of individuals, maintained in CRS (Central Reservation System)
              database. This code is generated only when the CRS gets full data
              of journey like passenger's name, gender, age, train number,
              journey class, berth preference, contact link, etc PNR is per
              ticket and not for person. If multiple members are booked together
              on one ticket, then Only one PNR number will be allocated for it.
              <br />
              <strong>
                Indian Railways has a 10-digit numerical PNR number.
              </strong>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p className="m-0">What use is of PNR?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              PNR is utilized to get the Confirmed or Waitlisted status of your
              booking along with the coach and seat numbers. Basically PNR is
              used in "follow-up" process by which passengers are able to get
              updates about the status of their journey. This 10-digit numerical
              PNR number of Indian Railways is of great use to passengers, whose
              tickets are not confirmed.
              <br />
              <strong>
                PNR helps passengers to check whether their tickets got
                confirmed or not.
              </strong>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <p className="m-0">Where would I find PNR?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              On a paper ticket released in a railway booking counter, the PNR
              number is on the top left of the ticket. The PNR number on ticket
              might be split right into 3-7(digits) form (e.g. 890-1234567) on
              paper ticket. On IRCTC e-ticket or any other agency e-ticket the
              PNR number can be on the top left of the ticket. PNR might also be
              on SMS alert on your mobile if you have booked e-ticket and
              provided your mobile number. Below are two ticket samples of
              Online/IRCTC Ticket and Counter/Paper Ticket. In this you can see
              the location of PNR Number
              <img
                src="https://indianrailways.info/images/pnr_location_on_ticket.jpg"
                alt="PNR Location on Ticket"
                class="img-responsive w-100 mt-2"
              />
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <p className="m-0">How to get PNR Status via SMS on mobile?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              You could check PNR Status of your ticket via SMS on mobile by
              sending out SMS to any of below numbers in the following manner.
              <br />
              <br />
              <div>
                PNR <i>&lt;10-digit PNR Number&gt;</i> to <b>139</b>
              </div>
              <div>
                PNR <i>&lt;10-digit PNR Number&gt;</i> to <b>54959</b>
              </div>
              <div>
                PNR <i>&lt;10-digit PNR number&gt;</i> to <b>5676747</b>
              </div>
              <div>
                IRPNR <i>&lt;10-digit PNR Number&gt;</i> to <b>57886</b>
              </div>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <p className="m-0">How to get PNR Status via Phone call?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              You could check PNR Status of your ticket via SMS on mobile by
              sending out SMS to any of below numbers in the following manner.
              You could call 139 to check PNR Status of your ticket and other
              details.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <p className="m-0">Why am I getting errors while checking PNR?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <strong>There could be 3 possible reasons </strong>
              <br />
              1. You entered wrong PNR number(Please check PNR then try again ).
              <br />
              2. Web servers are down.(In this case check again couple of
              minutes). <br />3 Indian Railways Servers Maintenance happens at
              11:30pm - 12:30am (Check again after 12:30 AM).
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <p className="m-0">What is "Chart Not Prepared" status?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <strong>
                The last booking chart for a train will be done at least 4hrs
                prior to the schedule departure of the train at origination
                station.
              </strong>
              <br />
              But in reality charts have been getting prepared 1 or 2 hrs prior
              to the actual departure of the train. In situation of early
              morning or late evening trains, this might be prepped considerably
              earlier during the previous night itself. Your booking standing
              might change any time till chart is prepared. Though quite
              uncommon, it is possible that an RAC ticket can change to
              wait-listed status. It is also possible that booking relocated
              from WL to CNF can return to RAC or WL. However none of this will
              certainly not happen for a ticket which was CNF while Booking
              itself.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <p className="m-0">
              What are different type of Booking Status Codes and their meaning?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Below is the list of various Booking Codes and their meanings</p>
            <div className="table-responsive">
              <table class="table table-striped table-bordered low-padding">
                <thead>
                  <tr>
                    <td>Booking Code</td>
                    <td>Description</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CAN / MOD</td>
                    <td>Cancelled or Modified Passenger</td>
                  </tr>
                  <tr>
                    <td>CNF / Confirmed</td>
                    <td>
                      Confirmed (Coach/Berth number will be available after
                      chart preparation)
                    </td>
                  </tr>
                  <tr>
                    <td>RAC</td>
                    <td>Reservation Against Cancellation</td>
                  </tr>
                  <tr>
                    <td>WL #</td>
                    <td>Waiting List Number</td>
                  </tr>
                  <tr>
                    <td>CKWL #</td>
                    <td>Tatkal Waiting List Number</td>
                  </tr>
                  <tr>
                    <td>RLWL</td>
                    <td>Remote Location Wait List</td>
                  </tr>
                  <tr>
                    <td>GNWL</td>
                    <td>General Wait List</td>
                  </tr>
                  <tr>
                    <td>PQWL</td>
                    <td>Pooled Quota Wait List</td>
                  </tr>
                  <tr>
                    <td>REGRET/WL</td>
                    <td>No More Booking Permitted</td>
                  </tr>
                  <tr>
                    <td>RELEASED</td>
                    <td>
                      Ticket Not Cancelled but Alternative Accommodation
                      Provided
                    </td>
                  </tr>
                  <tr>
                    <td height="24">R# #</td>
                    <td height="24">RAC Coach Number Berth Number</td>
                  </tr>
                  <tr>
                    <td>CK</td>
                    <td>Tatkal Quota</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9a-content"
            id="panel9a-header"
          >
            <p className="m-0">
              What are different type of Class Codes and their meaning?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Below is the list of various Class Codes and their meanings.</p>
            <div class="table-responsive">
              <table class="table table-striped table-bordered low-padding">
                <thead>
                  <tr>
                    <td>Code</td>
                    <td>Description</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1A</td>
                    <td>AC First class (Air-Conditioned)</td>
                  </tr>
                  <tr>
                    <td>2A</td>
                    <td>AC 2 Tier Sleeper (Air-Conditioned)</td>
                  </tr>
                  <tr>
                    <td>3A</td>
                    <td>AC 3 Tier (Air-Conditioned)</td>
                  </tr>
                  <tr>
                    <td>3E</td>
                    <td>AC 3 Tier Economy (Air-Conditioned)</td>
                  </tr>
                  <tr>
                    <td>CC</td>
                    <td>AC Chair Car (Air-Conditioned)</td>
                  </tr>
                  <tr>
                    <td>FC</td>
                    <td>First class</td>
                  </tr>
                  <tr>
                    <td>SL</td>
                    <td>Sleeper Class</td>
                  </tr>
                  <tr>
                    <td>2S</td>
                    <td>Second Sitting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10a-content"
            id="panel10a-header"
          >
            <p className="m-0">
              What are different type of Quota Codes and their meaning?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Below is the list of various Quota Codes and their meanings.</p>
            <div class="table-responsive">
              <table class="table table-striped table-bordered low-padding">
                <thead>
                  <tr>
                    <td>Code</td>
                    <td>Description</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GN</td>
                    <td>General Quota</td>
                  </tr>
                  <tr>
                    <td>CK</td>
                    <td>Tatkal Quota</td>
                  </tr>
                  <tr>
                    <td>PT</td>
                    <td>Premium Tatkal Quota</td>
                  </tr>
                  <tr>
                    <td>RC(RAC)</td>
                    <td>Reservation Against Cancellation</td>
                  </tr>
                  <tr>
                    <td>LB</td>
                    <td>Lower Berth</td>
                  </tr>
                  <tr>
                    <td>PQ</td>
                    <td>Pooled Quota</td>
                  </tr>
                  <tr>
                    <td>OS</td>
                    <td>Out Station</td>
                  </tr>
                  <tr>
                    <td>RS</td>
                    <td>Road Side</td>
                  </tr>
                  <tr>
                    <td>GNRS</td>
                    <td>General Quota Road Side</td>
                  </tr>
                  <tr>
                    <td>LD</td>
                    <td>Ladies Quota</td>
                  </tr>
                  <tr>
                    <td>SS</td>
                    <td>
                      Female(above 45 Year)/Senior Citizen/Travelling alone
                    </td>
                  </tr>
                  <tr>
                    <td>HP</td>
                    <td>Physically Handicapped Quota</td>
                  </tr>
                  <tr>
                    <td>YU</td>
                    <td>Yuva</td>
                  </tr>
                  <tr>
                    <td>HO</td>
                    <td>Head quarters/high official Quota</td>
                  </tr>
                  <tr>
                    <td>DF</td>
                    <td>Defence Quota</td>
                  </tr>
                  <tr>
                    <td>PH</td>
                    <td>Parliament house Quota</td>
                  </tr>
                  <tr>
                    <td>FT</td>
                    <td>Foreign Tourist Quota</td>
                  </tr>
                  <tr>
                    <td>DP</td>
                    <td>Duty Pass Quota</td>
                  </tr>
                  <tr>
                    <td>RE</td>
                    <td>Railway Employee Staff on Duty for the train</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11a-content"
            id="panel11a-header"
          >
            <p className="m-0">
              What are different type of Coach Codes and their meaning?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Below is the list of various Coach Codes and their meanings</p>
            <div class="table-responsive">
              <table class="table table-striped table-bordered low-padding">
                <thead>
                  <tr>
                    <td>Coach Code</td>
                    <td>Description</td>
                    <td>Details</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A</td>
                    <td>2-Tier Air Conditioned Coach</td>
                    <td>
                      There are total 6 berths in coupe among which 2 berth are
                      facing each other i.e Lower and Upper side. These berths
                      are bigger and wider than 3-Tier Berths.
                    </td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>3-Tier Air Conditioned Coach</td>
                    <td>
                      There are total 8 berths in a coupe among which 3 berths
                      are facing each other i.e Lower , Middle and Upper and two
                      side berth. Basically this is similar to slepper Coach.
                    </td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>Air Conditioned Chair Car</td>
                    <td>
                      These are the generally day trains where the arrangement
                      of seat are made in 3+3 or 3+2 configuration which can be
                      pushed back and also have aisle(walkaway) in between.
                    </td>
                  </tr>
                  <tr>
                    <td>D</td>
                    <td>Second Class seats which can be booked</td>
                    <td>
                      These are the same 3+3 seats with walkaway in between but
                      these seats are pre-reservable. i.e they are pre-booked
                      before the train is boarded.
                    </td>
                  </tr>
                  <tr>
                    <td>E</td>
                    <td>Executive Chair Car</td>
                    <td>
                      These seats are more wider and spacious than normal Chair
                      Car.
                    </td>
                  </tr>
                  <tr>
                    <td>EXT</td>
                    <td>Extra Coach</td>
                    <td>
                      Sometimes in some festival season or during vacation the
                      amount of commuters increase , so extra Coaches are added.
                      Generally these extra Coach are of lower Classes.
                    </td>
                  </tr>
                  <tr>
                    <td>DE</td>
                    <td>Combination of Executive Class and Second Class</td>
                    <td>
                      Some Coaches are divided in middle, mostly Executive Class
                      only. So some seats / berths are of Executive Class in one
                      half and Second Class in another half
                    </td>
                  </tr>
                  <tr>
                    <td>F</td>
                    <td>Non-A.C First Class</td>
                    <td>
                      These are coupe with doors. There are no side berths and
                      these have the capability to accommodate 2-4 persons.
                    </td>
                  </tr>
                  <tr>
                    <td>G</td>
                    <td>3-Tier Air Conditioned(Garib Rath)</td>
                    <td>
                      It is the symbol which is used for indicating the Class S
                      (Sleeper Coach) of Garib Rath
                    </td>
                  </tr>
                  <tr>
                    <td>H</td>
                    <td>First Class Air Conditioned</td>
                    <td>
                      It is similar in layout to the F Class, and is Air
                      Conditioned
                    </td>
                  </tr>
                  <tr>
                    <td>HA</td>
                    <td>Combination of H &amp; A Class</td>
                    <td>
                      It is combination of two types. Half Coach is of first
                      Class Air Conditioned which is of type H and other half is
                      2-Tier Air Conditioned which is of Type A
                    </td>
                  </tr>
                  <tr>
                    <td>HB</td>
                    <td>Combination of H &amp; B Class</td>
                    <td>
                      It is combination of two types. Half Coach is of first
                      Class Air Conditioned which is of type H and other half is
                      3-Tier Air Conditioned which is of Type B
                    </td>
                  </tr>
                  <tr>
                    <td>J</td>
                    <td>Garib Rath Chair Car</td>
                    <td>
                      It is the Garib Rath version of the Chair Car sitting
                    </td>
                  </tr>
                  <tr>
                    <td>RA</td>
                    <td>2-Tier Air Conditioned RAC</td>
                    <td>It is RAC in Coach type A</td>
                  </tr>
                  <tr>
                    <td>RB</td>
                    <td>3-Tier Air Conditioned RAC</td>
                    <td>It is RAC in Coach type B</td>
                  </tr>
                  <tr>
                    <td>RG</td>
                    <td>3-Tier Air Conditioned RAC Garib Rath</td>
                    <td>It is RAC in Coach type G</td>
                  </tr>
                  <tr>
                    <td>RS</td>
                    <td>Sleeper Class RAC</td>
                    <td>It is RAC in Coach type S.</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>Sleeper Class version</td>
                    <td>
                      It is Sleeper Coach. It has group of 8 berths with 3
                      berths facing each other i.e Upper, Middle and Lower and 2
                      berths on the side. Sometimes it also has 9 berths, in
                      which case the side layout has 3 berths.
                    </td>
                  </tr>
                  <tr>
                    <td>SE</td>
                    <td>Second Class Executive Chair</td>
                    <td>It is a non-Air-conditioned version of Class E.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel12a-content"
            id="panel12a-header"
          >
            <p className="m-0">
              How does Railway Reservations work and Booking Status changed ?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <strong>
                Railway Reservations and Booking Status explained step by step
              </strong>
              <br />
              When all available seats on a train are sold, Indian Railway or
              IRCTC releases RACs for railway reservations. Once all of those
              are sold, WL tickets are released. On almost every train, tickets
              are canceled for a variety of reasons. These cancellations can get
              you on the train if you bought an RAC or WL ticket. When the
              reservation chart of a particular train is ready (usually meaning
              that the train is due to depart in a few hours) and there are
              still some available tickets in different quotas, those will be
              given to RAC/WL ticket holders. Usually booking are upgraded step
              by step. <br />
              <br />
              Tickets are sold in the following order:
              <ol>
                <li>Available 02</li>
                <li>Available 01</li>
                <li>RAC 01</li>
                <li>RAC 02</li>
                <li>RAC 03</li>
                <li>RAC 04</li>
                <li>WL 01</li>
                <li>WL 02</li>
              </ol>
              And more WL ....
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel13a-content"
            id="panel13a-header"
          >
            <p className="m-0">Booking Status changes with example ?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <strong>
                Understanding your ticket and WL number of PNR status
              </strong>
              <br />
              On Railway ticket, there are two numbers which tell the position
              at which you joined the waitlist and current position.
              <br />
              Example: You have booked a Railway Ticket to some destination. At
              the end of the Booking Ticket, you get a ticket with Position as
              WL5/WL2. In this example you joined the waitlist at position 5
              (WL5), but by the time you actually bought the ticket online you
              moved to waitlist position 2 (WL2) (due either to a cancellation
              or to someone not making a final booking). The first number (WL5)
              will always stay the same it indicates position you joined the
              queue. The second number (WL2) will decrease until you get a
              ticket. Your railway reservation could change / upgrade like:
              <br />
              <br />
              Tickets are sold in the following order:
              <ul>
                <li>WL 5/WL 2 (Starting Position . Waitlist 2)</li>
                <li>WL 5/WL 1 (Waitlist 1)</li>
                <li>WL 5/RAC 3 (Reservation Against Cancellation 3)</li>
                <li>WL 5/RAC 1 (Reservation Against Cancellation 1)</li>
                <li>WL 5/CNF (Seat Confirmed)</li>
                <li>AB1 (Seat Number Confirmed)</li>
              </ul>
              WL 5/WL 2 = Waitlist ticket : you cannot board the train. <br />
              WL 5/RAC 3 = RAC ticket : you are allowed to board the train, but
              you may end up on a seat instead of a berth. <br />
              WL 5/CNF = Confirmed ticket : you can board the train and you have
              a berth to yourself. <br />
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel14a-content"
            id="panel14a-header"
          >
            <p className="m-0">What is TATKAL Booking and how it is done?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Tatkal booking is meant for immediate travel plans. <br />
              <strong>
                Tatkal booking for every train opens 1 days in advance at 10 am
                for AC (Air conditioned Class) and at 11 Am for Non-Ac.
              </strong>
              <br />
              You can book tatkal e-ticket online irctc.co.in or any other
              online booking agency. Every train and class has a defined tatkal
              quota and it varies from station to station. Many of the trains
              does not have tatkal category. You have to select the Tatkal check
              box in the 'Plan my travel' page along with other details for
              booking tatkal ticket.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel15a-content"
            id="panel15a-header"
          >
            <p className="m-0">What are TATKAL Charges?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Tatkal Charges have been fixed as a percentage of fare at the
              rate of 10% of basic fare for second class and 30% of basic fare
              for all other classes subject to minimum and maximum as given in
              the table below. The below charges will be levied uniformly both
              in peak period & non-peak periods.
            </p>
            <div class="table-responsive">
              <table class="table table-striped table-bordered low-padding">
                <thead>
                  <tr>
                    <td>Class of Travel</td>
                    <td>Minimum Tatkal Charges(in Rs.)</td>
                    <td>Maximum Tatkal Charges(in Rs.)</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Second (sitting)</td>
                    <td>10.00</td>
                    <td>15.00</td>
                  </tr>
                  <tr>
                    <td>Sleeper</td>
                    <td>90.00</td>
                    <td>175.00</td>
                  </tr>
                  <tr>
                    <td>AC Chair Car</td>
                    <td>100.00</td>
                    <td>200.00</td>
                  </tr>
                  <tr>
                    <td>AC 3Tier</td>
                    <td>250.00</td>
                    <td>350.00</td>
                  </tr>
                  <tr>
                    <td>AC 2Tier</td>
                    <td>300.00</td>
                    <td>400.00</td>
                  </tr>
                  <tr>
                    <td>Executive</td>
                    <td>300.00</td>
                    <td>400.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel16a-content"
            id="panel16a-header"
          >
            <p className="m-0">What are TATKAL Booking conditions?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <strong>
                Tatkal tickets shall be issued only on production of one of the
                ten prescribed proofs of identity shown under
              </strong>
              <br />
              <ul>
                <li>
                  Voter Photo identity card issued by Election Commision of
                  India.
                </li>
                <li>Passport</li>
                <li>PAN Card issued by Income Tax Department.</li>
                <li>Driving Licence issued by RTO.</li>
                <li>
                  Photo identity card having serial number issued by
                  Central/State Government.
                </li>
                <li>
                  Student Identity Card with photograph issued by recognized
                  School/College for their students.
                </li>
                <li>Nationalized Bank Passbok with photograph.</li>
                <li>Credit cards issued by banks with laminated photograph.</li>
                <li>Unique Identification Card "Aadhaar".</li>
                <li>
                  Photo identity cards having serial number issued by Public
                  Sector Undertaking of State/Central Government, District
                  Administration, Municipal bodies and Penchant Administration.
                </li>
              </ul>
              The tatkal category is not applicable on first ac class and second
              seating class. Ladies and general quota cannot be opted for along
              with Tatkal quota. No concession is allowed in Tatkal Booking. It
              will be possible to book a maximum of only four passengers per PNR
              forTatkal tickets. The facility of change of name is not permitted
              on the bookings made under Tatkal scheme TDRs are not being issued
              for waiting list tickets. No duplicate Tatkal tickets shall be
              issued. Duplicate Tatkal tickets shall be issued only in
              exceptional cases on payment of full fare including Tatkal
              charges.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel17a-content"
            id="panel17a-header"
          >
            <p className="m-0">Cancellation Rules & Refunds</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <strong>Cancellation</strong>
              <br />
              Cancellation Charges before Chart Preparation: The amount deducted
              is based on the time of cancellation and the status of your
              ticket.
              <br />
              <br />
              <ol>
                <li>
                  <strong>
                    For cancellation of confirmed tickets more than one day in
                    advance of the scheduled departure of the train, excluding
                    the date of journey, the minimum cancellation charges based
                    on the class of travel as follows:
                  </strong>
                  <br />
                  <br />
                  Flat Cancellation charges per passenger - Class of Travel
                  <br />
                  120.00 - AC First/Executive Class <br />
                  100.00 - First Class/AC 2 Tier
                  <br />
                  90.00 - AC Chair Car / AC 3 Tier/AC 3 Economy
                  <br />
                  60.00 - Sleeper Class
                  <br />
                  30.00 - Second Class
                  <br />
                  <br />
                </li>
                <li>
                  <strong>
                    For cancellation of confirmed tickets less than 24 hrs and
                    upto four hours before the scheduled departure of the train.
                  </strong>
                  <br />
                  <br />
                  The cancellation charges will be 25% of the total fare paid by
                  you, subject to flat minimum cancellation charges for each
                  class.
                  <br />
                  <br />
                </li>
                <li>
                  <strong>
                    For cancellation of confirmed tickets less than four hours
                    before the scheduled departure of the train and upto the
                    prescribed time limits as mentioned below, after actual
                    departure of the train
                  </strong>
                  <br />
                  <br />
                  The cancellation charges will be 50% of the fare paid by you,
                  subject to flat minimum cancellation charges for each class.
                  <br />
                  Distance of Journey - Time limit for cancellation after
                  departure of the train.
                  <br />
                  Upto 200 Kms. - 3 Hrs.
                  <br />
                  From 201 Kms. To 500 Kms. - 6 Hrs. <br />
                  Over 500 Kms. - 12 Hrs. <br />
                  <br />
                </li>
              </ol>
              <strong>I-Ticket(Paper Ticket)</strong>
              <br />
              Cancellation is not possible on Internet. To cancel a ticket, the
              customer will have to submit the ticket at any computerized
              reservation (PRS) counter. The fare paid by the customer will be
              refunded electronically (as credit to the relevant credit/debit
              card account used for the transaction) after deducting
              cancellation charges. Bank charges & IRCTC service charge is not
              refunded. PRS counter will issue a cancellation ticket/receipt and
              IRCTC will credit the amount of refund due, to the customer's
              account. No cash refund will be given to the Customer. I-Ticket
              can be cancelled upto 72 hrs after the scheduled departure of
              train at any computerized reservation counter.
              <br />
              <br />
              <strong>
                A.For Train running Late by More than Three hours And Passenger
                Not Travelled:
              </strong>
              <br />
              In case of train running late by more than three hours & the
              passenger not travelling, full refund is permitted. The ticket is
              surrendered/TDR obtained in case of I-ticket.
              <br />
              <br />
              <strong>E-Ticket</strong>
              <br /> E-Tickets can be cancelled only through Internet till Chart
              preparation of the train. It is not allowed to be cancelled via
              reservation (PRS) counter. e-Ticket can be cancelled till the time
              of chart preparation for the train through Internet. Cancellation
              would be confirmed online and the refund would be credited back to
              the account used for booking. There will be no cash refund at any
              stage
              <br />
              <br />
              <strong> A.Cancellation before Chart Preparation:</strong>
              <br />
              The customers are requested to use the online cancel facility
              provided by IRCTC.
              <br />
              <br />
              <strong>
                B.Cancellation after Chart Preparation: For Confirmed Tickets:
              </strong>
              <br />
              The customers are requested to use the online TDR Filing & Status
              tracking service provided by IRCTC. Railways will process the
              refund and money of refund amount will be credited back to same
              account.
              <br />
              <br />
              <strong>
                For Train running Late by More than Three hours And Passenger
                Not Travelled:
              </strong>
              <br /> In case of train running late by more than three hours &
              the passenger not travelling, full refund is permitted. Customer
              should file TDR online or mail to IRCTC within the prescribed time
              limits which are as under:
              <br /> Distance of Journey - Time limit for cancellation after
              departure of the train.
              <br /> Upto 200 Kms. - 3 Hrs. <br />
              From 201 Kms. To 500 Kms. - 6 Hrs.
              <br /> Over 500 Kms. - 12 Hrs.
              <br />
              <br />
              <strong> Fully Wait Listed Tickets:</strong>
              <br /> Such passengers art not required to send online request for
              cancellation. Tickets will be cancelled automatically and money
              will be refunded in respective account electronically.
              <br />
              <br />
              <strong> Part confirm/RAC/Waiting List:</strong> <br />
              If on PNR with more than one passenger and one passenger is having
              confirmed/RAC status and rest is on waiting list or vice-versa,
              names of all the passengers booked on such PNR will appear in the
              chart. A certificate can be obtained from the Ticket Checking
              staff in the train regarding non-travelling of wait-listed
              passengers on such tickets. Refund will be processed through TDR
              refund only after receiving the original certificate.
              <br />
              <br />
              <strong>
                If one or all such passengers do not want to travel:
              </strong>
              <br />
              Before chart preparation, online cancellation can be done. After
              chart preparation, online request can be sent to IRCTC through TDR
              refund for seeking refund. <br />
              <br />
              <strong>
                TATKAL Tickets Full refund of fare and tatkal charges will be
                granted on the tickets booked under Tatkal scheme only in the
                following circumstances :
              </strong>
              <br />
              If the train is delayed by more than 3 hours at the journey
              originating point of the passenger & not the boarding point if the
              passenger's journey originating point and boarding point are
              different. If the train is to run on a diverted route and
              passenger is not willing to travel. If the train is to run on
              diverted route and boarding station or the destination or both the
              stations are not on the diverted route. In case of non attachment
              of coach in which Tatkal accommodation has been earmarked and the
              passenger has not been provided accommodation in the same class.
              If the party has been accommodated in lower class and does not
              want to travel. In case the party travels in lower class, the
              passenger will be given refund of difference of fare and also the
              difference of Tatkal charges, if any.
              <br />
              <br />
              <strong>
                Other than above conditions No refund will be granted on
                cancellation of confirmed Tatkal tickets/duplicate tatkal
                ticket.
              </strong>
              <br />
              <strong>WL and RAC refunds </strong> <br />
              If your train is ready for departure and its reservation chart is
              finalized, the cost of your WL ticket will be automatically
              refunded to your bank account.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel20a-content"
            id="panel20a-header"
          >
            <p className="m-0">
              Any special precaution while providing details during Ticket
              Booking?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Passengers have to be careful about their details provided while
              booking train tickets. Your personal information could be stolen
              as they were publicly pasted on rail coaches after chart
              preparation. The only way to protect yourself from fraudulent
              transactions, is to avoid quoting PAN details for identity proof.
              <br />
              <strong>
                Don't mention your PAN card as ID proof while booking train
                tickets.
              </strong>
              <br />
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel21a-content"
            id="panel21a-header"
          >
            <p className="m-0">Am I Insured while Travelling on Railways?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <strong>
                Low cost Insurance or Life insurance for Railway(irctc)
                Passengers:
              </strong>
              <br />
              Indian Railways provides free insurance to the passengers. In case
              of death railways pays Rs. 4 Lakhs and in case of injury the
              minimum amount is Rs. 32000/- and maximum can be Rs. 4 Lakhs
              depending upon the severity. On the accident spot railway pays
              ex-gratia amount Rs. 15000/- to the dependents of the dead
              passenger and Rs. 5000/- to the injured and Rs. 500/- less injured
              passengers for immediate needs. The insurance not only covers the
              travelling passenger, it covers the person who came to receive
              someone with valid platform ticket. If you have a valid platform
              or travel ticket and you get insured or dead because of any terror
              or due to railway negligence, you are covered under insurance.
              Railway Claim Tribunal will decide the amount you are liable for
              insurance depends upon severity.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel22a-content"
            id="panel22a-header"
          >
            <p className="m-0">About IndianRailways.info</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Find answers to all Frequently asked questions about Indian
              Railways This website is purely informational and for travel
              related information. It does not guarantee for veacity of any of
              the data. This is not an official website of The Ministry of
              Railways, Government of India. This website is not affiliated in
              any way with the aforesaid government entity i.e Indian Railways,
              IRCTC or any ofits subsidiaries etc. Please do not contact us for
              grievances or queries related to PNR Status, Reservation,
              Cancellation, Refund, Lost Ticket etc. You may like to visit the
              official website{" "}
              <a href="http://www.indianrail.gov.in" target="_blank" rel="noreferrer">
                http://www.indianrail.gov.in
              </a>{" "}
              for such enquiries.
            </p>
          </AccordionDetails>
        </Accordion>
      </WhiteBlock>
    </>
  );
};

export default FAQ;
