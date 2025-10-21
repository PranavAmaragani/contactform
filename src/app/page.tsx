"use client";
import { ArrowRight } from "lucide-react";
import { ArrowDown } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col px-8 py-16 md:px-20">
      {/* Main Page Heading */}
      <h1 className="text-5xl md:text-8xl font-medium text-black mb-22">
        Get in touch
      </h1>

      <div className="flex flex-col justify-center md:flex-row md:gap-16">
        {/* Left Section */}
        <div className="md:w-1/2 text-[15px] leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-medium text-black leading-[1.1] max-w-[500px] mb-14"> If you have any questions or you'd like to find out more about our services, please get in touch. </h2>

          <div className="space-y-4">
            <p className="font-semibold text-black text-[14px]">
              Contact details:
            </p>

            <div>
              <p className="text-[14px] text-[#767676] font-semibold mb-1">
                Office address:
              </p>
              <p className="text-[14px] text-[#9b9b9b] leading-relaxed">
                1 Waterside <br />
                Station Road <br />
                Harpenden <br />
                AL5 4US
              </p>
            </div>

            <div>
              <p className="text-[14px] text-[#767676] font-semibold mb-1">
                Registered address:
              </p>
              <p className="text-[14px] text-[#9b9b9b] leading-relaxed">
                Unit 4 <br />
                The Edge Business Park <br />
                Brownfields <br />
                Welwyn Garden City <br />
                Hertfordshire <br />
                AL7 1WX
              </p>
            </div>

            <div className="pt-2 space-y-1">
              <p className="text-[14px] text-[#9b9b9b]">
                <span className="font-medium text-[#9b9b9b]">Tel:</span> 020
                3345 3310
              </p>
              <p className="text-[14px] text-[#9b9b9b]">
                <span className="font-medium text-[#9b9b9b]">Email:</span>{" "}
                <a
                  href="mailto:enquiries@energy-park.co.uk"
                  className="underline text-[#9b9b9b] hover:text-[#7a7a7a] transition"
                >
                  enquiries@energy-park.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form className="md:w-1/2 mt-10 md:mt-0 space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              First name<span>*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-black"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Last name<span>*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-black"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Company
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-black"
            />
          </div>

          {/* Your Site */}
          <div>
             <label className="block text-sm font-semibold text-black mb-2">
    Your site<span>*</span>
  </label>
            <div className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 focus-within:border-black">
              <span className="text-[15px] text-black font-medium select-none">
                Residential Apartment
              </span>
              <ArrowDown className="text-[#bdbdbd]" size={16} />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Address
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-black"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              City
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-black"
            />
          </div>

          {/* Postcode */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Postcode<span>*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Email<span>*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-black"
            />
          </div>

          {/* Telephone */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Telephone
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-black"
            />
          </div>

          {/* About Site */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Please tell us a bit about your site
            </label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-black resize-none"
            ></textarea>
          </div>

          {/* Privacy */}
          <div className="flex items-center gap-2">
            <input
              id="privacy"
              type="checkbox"
              className="w-4 h-4 border-gray-400 rounded focus:ring-0"
            />
            <label htmlFor="privacy" className="text-sm text-black/70">
              I agree with the{" "}
              <a href="#" className="underline text-black hover:text-gray-700">
                privacy statement
              </a>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-300 transition mt-4"
          >
            <ArrowRight className="text-black w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
