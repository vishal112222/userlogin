import React from 'react'

export default function DropDown() {
  return (
    <div class="dropdown">
  <select>
    <option value="" disabled selected>Select Location</option>
    <option value="location1">Chandigarh</option>
    <option value="location2">Mumbai</option>
    <option value="location2">Delhi</option>
    <option value="location2">Jalandhar</option>
    <option value="location2">Ludhiana</option>
    {/* <!-- Add more options as needed --> */}
  </select>
</div>
  )
}