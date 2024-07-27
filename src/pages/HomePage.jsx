import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="p-10 flex items-center justify-center gap-x-5 h-screen">
      <section className="w-[45%]">
        <h1 className="text-cyan-900 font-extrabold text-5xl ">
          Navigating the digital landscape to success
        </h1>
        <p className="mt-5 font-normal text-justify text-gray-500">
          Ignite your brands potential with innovative digital strategies that
          drive results , we fuse creativity with data to make your online
          presence unstoppable.
        </p>
        <Link to={"/contact"}>
          {" "}
          <button className="bg-red-300 px-8 py-2 rounded-lg mt-5 text-cyan-950 font-medium hover:text-cyan-800 hover:font-bold">
            Book a Consultation
          </button>
        </Link>
      </section>
      <section>
        <img
          src="https://media.istockphoto.com/id/1443585607/vector/advertising-marketing-campaign-product-promotion-using-outdoor-internet-ads-direct-marketing.jpg?s=612x612&w=0&k=20&c=MzU7Zue-rnLIQQRBHWCA4-oSt9BYhhpVzTAkPGiyJuw="
          alt=""
        />
      </section>
    </main>
  );
};

export default HomePage;
