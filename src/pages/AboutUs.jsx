import { TiTick } from "react-icons/ti";

const AboutUs = () => {
  return (
    <section>
      {/* about us section */}
      <section className=" p-10 flex flex-col sm:flex-row sm:gap-x-10 items-center justify-center sm:h-[500px]">
        <div className="sm:w-[40%]">
          <h1 className="text-2xl font-bold  text-red-300">About Us</h1>
          <h2 className="text-xl font-semibold">
            We have 10+ Years of experience in Digital Marketing service
          </h2>
          <p className="text-justify text-gray-500 pb-4 pt-4">
            We are passionate about helping businesses thrive in the digital
            landscape. With over 10 years of experience in digital marketing,
            our team of seasoned professionals specializes in crafting
            innovative and effective strategies that drive growth and
            engagement.
          </p>
          <div className="flex gap-x-4">
            <TiTick className="text-red-300 w-8 h-8" />
            <p>First Working process</p>
          </div>
          <div className="flex gap-x-4">
            <TiTick className="text-red-300 w-8 h-8" />
            <p>24/7 support</p>
          </div>
          <button className="bg-cyan-800 px-5 py-2 rounded-full text-lightSecondary my-3">
            Request a demo
          </button>
        </div>
        <div className="sm:w-[30%] rounded-lg">
          <img
            src="https://www.teambonding.com/wp-content/uploads/2019/02/communication.jpg"
            alt="teamwork-image"
          />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
