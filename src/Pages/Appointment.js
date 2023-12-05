import React from "react";
import DoctorProfileImage from "../Assets/Doctor.png";

const Appointment = () => {
  return (
    <div className="Appointment flex text-white z-10">
      <div className="AppointmentLeftSide"></div>

      <div className="AppointmentCenter text-black">
        <div className="AppointmentProfileContainer flex gap-12">
        <div className="ProfileBoxTop">
          <img src={DoctorProfileImage} alt="" className="DoctorProfileImage" />
        </div>
        <div className="ProfileBoxBottom">
          <p className="NameText">Dr. Manik Dalvi</p>
          <p className="Department pb-2">Obstetrics & Gynecology</p>
          <button className="ProfileButton border-blue-500 border rounded-md">VIEW PROFILE</button>
        </div>
        </div>
<div className="AppointmentIconContainer">
  <hr />
<div className="AppointmentIcons flex">
          <div className="IconContainerLeft w-1/2">
<p className="TitleText">Book Appointment</p>
<p className="ContentText">Select Your Consultation Type</p>
<p className="PriceText">Fees approx ₹ 500</p>
<p className="">(pay at clinic)</p>
          </div>
          <div className="IconContainerRight flex gap-5 w-1/2">
<div class="ImageContainer">
  <img src="https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/In-Clinic.png" alt="" class="IconClinic" />
  <p class="ImageText text-white">In-Clinic</p>
</div>
<div class="ImageContainer">
<img src="https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/Audio_b.png" alt="" className="IconAudio" />
<p class="ImageText">Audio</p>
</div>
<div class="ImageContainer">
<img src="	https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/video_b.png" alt="" className="IconVideo rounded-lg" />
<p class="ImageText">Video</p>
</div>
          </div>
        </div>
        <div className="AppointmentIconContainer flex">
          <div className="IconContainerLeft w-1/2">
<p className="TitleText">Clinic Name</p>
<p className="">Select Your Consultation Type</p>
          </div>
          <div className="IconContainerLeft ">



          </div>
        </div>
</div>
        
      </div>
      
      <div className="AppointmentRightSide"></div>
    </div>
  );
};

export default Appointment;
