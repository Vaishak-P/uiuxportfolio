import { contactData } from '@/Data/data'
import React from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div>
      <div
        className="flex items-center space-x-8"
        data-aos="zoom-out-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-secondary to-primary
            flex items-center justify-center flex-col"
        >
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-highDark" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-lowWhite font-bold">Phone</h1>
          <h1 className="text-lowWhite">{contactData.phone}</h1>
        </div>
      </div>
      <div
        className="flex items-center space-x-8 mt-3 mb-3"
        data-aos="zoom-out-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-secondary to-primary
            flex items-center justify-center flex-col"
        >
          <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-highDark" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-lowWhite font-bold">Email</h1>
          <h1 className="text-lowWhite">{contactData.email}</h1>
        </div>
      </div>
      <div
        className="flex items-center space-x-8"
        data-aos="zoom-out-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        data-aos-delay="400"
      >
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-secondary to-primary
            flex items-center justify-center flex-col"
        >
          <FaMap className="w-4 h-4 md:w-7 md:h-7 text-highDark" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-lowWhite font-bold">
            Address
          </h1>
          <h1 className="text-lowWhite">{contactData.address}</h1>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo