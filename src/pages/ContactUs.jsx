import { useForm } from "react-hook-form";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import TextArea from "../components/TextArea";
import { MdEmail } from "react-icons/md";

import {
  FaInstagram,
  FaPhoneAlt,
  FaPinterest,
  FaPinterestP,
  FaUser,
} from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa6";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendInfo = (data) => {
    alert("We recieved your message👍. We'll get back to you soon");
    reset();
  };
  return (
    <>
      <section className="flex  items-center  bg-white m-10 rounded-lg border-gray-400 shadow-md shadow-gray-400 w-[70%] mx-auto">
        <section className="space-y-3 bg-gray-50 w-[40%] p-10">
          <h5 className="text-red-300 font-bold text-xl ">Get In Touch</h5>
          <p className="font-normal  text-gray-500 text-justify">
            Curious about how we can transform your online presence ? Get in
            touch and let's craft your sucess story.
          </p>
          {/* location */}

          <div className="flex items-center  gap-x-5 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              className="bg-cyan-800 rounded-full p-2 w-10 h-10 text-lightSecondary"
            >
              <path
                fill="currentColor"
                d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"
              ></path>
            </svg>
            <div className=" flex flex-col">
              <strong className="text-gray-900  text-lg font-medium">
                Head Office
              </strong>
              <span className="font-thin text-sm">Perungudi , Chennai</span>
            </div>
          </div>
          {/* phone */}
          <div className="flex items-center  gap-x-5 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              className="text-lightSecondary bg-cyan-800 p-2 w-10 h-10 rounded-full"
            >
              <path
                fill="currentColor"
                d="M20 12q-.4 0-.712-.288T18.925 11q-.325-2.325-1.963-3.963T13 5.076q-.425-.05-.712-.35T12 4t.3-.712t.7-.238q3.15.35 5.375 2.575T20.95 11q.05.4-.238.7T20 12m-4.175 0q-.325 0-.575-.225t-.375-.6q-.2-.725-.763-1.287t-1.287-.763q-.375-.125-.6-.375T12 8.15q0-.5.35-.812t.775-.213q1.4.325 2.413 1.338t1.337 2.412q.1.425-.225.775t-.825.35m4.125 9q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
              ></path>
            </svg>
            <div className=" flex flex-col ">
              <strong className="text-gray-900  text-lg font-medium">
                Phone
              </strong>
              <span className="font-thin text-sm">+91 7689435690</span>
            </div>
          </div>
          {/* email */}
          <div className="flex items-center gap-x-5 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="3em"
              viewBox="0 0 24 24"
              className="text-lightSecondary p-2 w-10 h-10 bg-cyan-800 rounded-full"
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
              ></path>
            </svg>
            <div className=" flex flex-col">
              <strong className="text-gray-900 text-lg font-medium">
                Email
              </strong>
              <span className="font-thin text-sm">
                writeurqueries@netfuse.com
              </span>
            </div>
          </div>
          <div className="mt-3">
            <p className="font-semibold">Follow our social media</p>
            <div className="flex gap-x-3 my-2">
              <FaPinterestP className="bg-cyan-800 text-white w-8 h-8 rounded-full p-2" />
              <FaYoutube className="bg-cyan-800 text-white w-8 h-8 rounded-full p-2" />
              <FaTwitter className="bg-cyan-800 text-white w-8 h-8 rounded-full p-2" />
              <FaInstagram className="bg-cyan-800 text-white w-8 h-8 rounded-full p-2" />
            </div>
          </div>
        </section>
        <section className="w-[60%]   p-10 ">
          <h1 className="text-cyan-800 font-black text-2xl ">
            Send Us A Message
          </h1>
          {/* <p className="font-normal  text-gray-500 ">
            Your next big digital breakthrough is just a message away.
          </p> */}

          {/* contact form */}

          <form
            className=" my-6 space-y-8 bg-white py-5 rounded-lg"
            onSubmit={handleSubmit(sendInfo)}
          >
            <section className="flex gap-x-4">
              {/* first name */}
              <div className="w-[50%]">
                <div
                  className={`flex justify-center items-center pb-2 gap-x-2  ${
                    errors.firstName
                      ? "border-b border-red-600"
                      : "border-b border-gray-400"
                  }`}
                >
                  <FaUser className="text-gray-400" />
                  <FormInput
                    type="text"
                    name="firstName"
                    placeholder={"First name"}
                    register={register("firstName", {
                      required: "First name is required",
                      minLength: {
                        value: 3,
                        message:
                          "First name should have mininum of 3 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "Username exceeds 30 characters",
                      },
                    })}
                    error={errors.firstName}
                  />
                </div>
                {errors.firstName && (
                  <small className="text-red-500">
                    {errors.firstName.message}
                  </small>
                )}
              </div>
              {/* last name */}
              <div className="w-[50%]">
                <div
                  className={`flex justify-center items-center pb-2 gap-x-2  ${
                    errors.lastName
                      ? "border-b border-red-600"
                      : "border-b border-gray-400"
                  }`}
                >
                  <FaUser className="text-gray-400" />
                  <FormInput
                    type="text"
                    name="lastName"
                    placeholder={"Last name"}
                    register={register("lastName", {
                      required: "Last name is required",
                      minLength: {
                        value: 1,
                        message: "Last should have mininum of 1 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Username exceeds 20 characters",
                      },
                    })}
                    error={errors.lastName}
                  />
                </div>
                {errors.lastName && (
                  <small className="text-red-500">
                    {errors.lastName.message}
                  </small>
                )}
              </div>
            </section>
            <section className="flex gap-x-4">
              {/* email address */}
              <div className="w-[50%]">
                <div
                  className={`flex justify-center items-center pb-2 gap-x-2  ${
                    errors.email
                      ? "border-b border-red-600"
                      : "border-b border-gray-400"
                  }`}
                >
                  <MdEmail className="text-gray-400" />
                  <FormInput
                    type="text"
                    name="email"
                    placeholder={"Email Id"}
                    register={register("email", {
                      required: "Email Id is required",
                      minLength: {
                        value: 3,
                        message: "Username should have mininum of 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Username exceeds 20 characters",
                      },
                    })}
                    error={errors.email}
                  />
                </div>
                {errors.email && (
                  <small className="text-red-500">{errors.email.message}</small>
                )}
              </div>
              {/* phone number */}
              <div className="w-[50%]">
                <div
                  className={`flex justify-center items-center pb-2 gap-x-2  ${
                    errors.phoneNumber
                      ? "border-b border-red-600"
                      : "border-b border-gray-400"
                  }`}
                >
                  <FaPhoneAlt className="text-gray-400" />
                  <FormInput
                    type="number"
                    name="phoneNumber"
                    placeholder={"Phone number"}
                    register={register("phoneNumber", {
                      required: "Phone number is required",
                      minLength: {
                        value: 10,
                        message:
                          "Phone number should have mininum of 10 characters",
                      },
                      maxLength: {
                        value: 10,
                        message: "Phone number exceeds 10 characters",
                      },
                    })}
                    error={errors.phoneNumberName}
                  />
                </div>
                {errors.phoneNumber && (
                  <small className="text-red-500">
                    {errors.phoneNumber.message}
                  </small>
                )}
              </div>
            </section>

            {/* password field */}
            <div
              className={`flex justify-center items-center pb-2 gap-x-2 ${
                errors.password
                  ? "  border-b  border-red-600"
                  : "  border-b  border-gray-400"
              }`}
            >
              <TextArea
                type="text"
                name="message"
                placeholder={"Message"}
                register={register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 3,
                    message: "Password should have mininum of 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password exceeds 16 characters",
                  },
                })}
                error={errors.message}
              />
            </div>
            {errors.message && (
              <small className="text-red-500">{errors.message.message}</small>
            )}

            <FormButton label="Send message" />
          </form>
        </section>
      </section>
    </>
  );
};

export default ContactUs;
