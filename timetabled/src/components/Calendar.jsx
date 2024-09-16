import React from "react";
import Event from './Event'

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td className="time">8 am</td>
            <td></td>
            <td></td>
            <Event event='Morning Jog 🏃‍♂️' color='blue' location='Around hotel'/>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Flight Out ✈️' color='green' location='Haneda Airport'/>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Tokyo Tower 🗼' color='pink' location='Tokyo Tower!'/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <Event event='Shibuya 🚦' color='red' location='Shibuya'/>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <Event event='Ramen 🍜' color='brown' />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Meiji Shrine ⛩️' color='gold' location='Shibuya'/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Ginza 🛍️' color='cyan' location='Ginza'/>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <Event event='Akihabara 🎮' color='lime' location='Akihabara'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Tea 🍵' color='purple' location='Hotel'/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <Event event='Flight In ✈️' color='green' location='Haneda Airport'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Ueno Park 🌳' color='olive' location='Ueno'/>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Calendar;