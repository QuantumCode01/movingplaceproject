import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    address: '',
    unloadingAddress: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    date: '',
    stairs: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [showManualAddress, setShowManualAddress] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.unloadingAddress) newErrors.unloadingAddress = 'Unloading address is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip) newErrors.zip = 'ZIP code is required';
    if (!formData.date) newErrors.date = 'Date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      // Handle actual submission here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-[864px] mx-auto bg-white rounded-2xl sm:shadow-lg p-[64px] lg:px-[64px] px-[24px] md:px-[32px] mt-[32px] space-y-4">
        <h2 className="text-[30px] leading-[38px] font-bold text-center text-[#2E343E] font-[Mulish]">
          Enter your location(s)
        </h2>

        {/* Address Input */}
        <div className="relative">
          <input
            name="address"
            type="text"
            placeholder="2 Olive Walk, Pasadena, CA 91125"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-yellow-500 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <div className="absolute inset-y-0 left-3 h-[40px] flex items-center text-yellow-600">
            <img src="../assets/location.svg" alt="location" className="w-[24px] h-[24px]" />
          </div>
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-yellow-500 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <div className="absolute inset-y-0 left-3 h-[40px] flex items-center text-yellow-600">
            <img src="../assets/location.svg" alt="email" className="w-[24px] h-[24px]" />
          </div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

          {showManualAddress && (
        <div className="space-y-2 border border-gray-300 rounded-md p-4">
          <div className="flex items-center space-x-2 border h-[40px] border-gray-300 rounded-md px-3 py-2">
            <img src="../assets/grey-location.svg" alt="location" className="w-[24px] h-[24px]" />
            <input
              name="unloadingAddress"
              type="text"
              placeholder="Enter Unloading Address (123 Main St, City, State)"
              value={formData.unloadingAddress}
              onChange={handleChange}
              className="flex-1 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {errors.unloadingAddress && <p className="text-red-500 text-sm">{errors.unloadingAddress}</p>}

          <input
            type="text"
            placeholder="Street Address Line 2 (apt #/suite)"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />

          <input
            name="city"
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

          <div className="flex space-x-2">
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">State</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
            </select>
            <input
              name="zip"
              type="text"
              placeholder="ZIP"
              value={formData.zip}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {(errors.state || errors.zip) && (
            <p className="text-red-500 text-sm">
              {errors.state || errors.zip}
            </p>
          )}
        </div>
      )}


        {/* Date Input */}
        <div className="relative">
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-yellow-500 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            id="customDateInput"
          />
          <div
            className="absolute inset-y-0 left-3 flex h-[40px] items-center text-yellow-600 cursor-pointer"
            onClick={() => document.getElementById('customDateInput').showPicker()}
          >
            <img src="../assets/calender.svg" alt="calendar" className="w-[24px] h-[24px]" />
          </div>
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>

        {/* Stairs Dropdown */}
        <select
          name="stairs"
          value={formData.stairs}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">Do you have any flights of stairs?</option>
          <option value="None">None</option>
          <option value="1 Flight">1 Flight</option>
          <option value="2+ Flights">2+ Flights</option>
        </select>

        {/* Manual Entry and Add Location */}
        <div className="flex justify-between items-center h-[30px] text-sm text-[#8696AA]">
          <button
              type="button"
              onClick={() => setShowManualAddress(!showManualAddress)}
              className="flex items-center space-x-1 hover:underline shadow-none"
            >
           
          <span className="sm:block hidden">Enter Addresses Manually</span>
          <span className="sm:hidden block">Enter Manually</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0418 12.8033H8.4585M4.50016 11.9699L0.958496 12.8033L1.79183 9.26159L9.53591 1.51752C9.86134 1.19208 10.389 1.19208 10.7144 1.51752L12.2442 3.04734C12.5697 3.37277 12.5697 3.90041 12.2442 4.22585L4.50016 11.9699Z" stroke="#8696AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </button>


          <button type="button" className="border border-gray-300 px-[4px] h-[30px] rounded-full text-[#526077] hover:bg-gray-100 transition text-[13px] flex items-center space-x-1">
            <span>+ Add Location</span>
          </button>
        </div>

        {/* Packing Checkbox and Submit */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-4">
          <label className="order-2 sm:order-1 flex items-center space-x-2 text-sm text-gray-600 flex items-center space-x-2 text-sm text-gray-600">
            <input type="checkbox" className="form-checkbox text-yellow-500" />
            <span>Include <strong>Packing</strong> in my quote</span><span><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0.761719C12.4183 0.761719 16 4.34344 16 8.76172C16 13.18 12.4183 16.7617 8 16.7617C3.58172 16.7617 0 13.18 0 8.76172C1.93277e-07 4.34344 3.58172 0.761719 8 0.761719ZM8 8.76172C7.44772 8.76172 7 9.20943 7 9.76172V11.7617C7 12.314 7.44772 12.7617 8 12.7617C8.55229 12.7617 9 12.314 9 11.7617V9.76172C9 9.20943 8.55229 8.76172 8 8.76172ZM8 4.76172C7.44772 4.76172 7 5.20943 7 5.76172C7 6.314 7.44772 6.76172 8 6.76172C8.55229 6.76172 9 6.314 9 5.76172C9 5.20943 8.55229 4.76172 8 4.76172Z" fill="#D1D1DB"/>
</svg>
</span>
          </label>

          <button
            type="submit"
            className=" bg-yellow-400 text-gray-900 font-semibold py-3 px-5 rounded-full flex items-center justify-center space-x-2 hover:bg-yellow-500 transition text-center"
          >
            <span>Start a Moving Quote</span>
            <img src="../assets/blackarrow.svg" alt="arrow" className="w-[24px] h-[24px]" />
          </button>
        </div>
      </div>
    </form>
  );
}
