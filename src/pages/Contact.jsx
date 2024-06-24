import HomeLayout from "../layouts/HomeLayout";

function Contact() {
  function handleInputChange() {}
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form className="flex flex-col items-center justify-center gap-2 p-5 w-[22rem] rounded-md text-white">
          <h1 className="text-3xl font-semibold">Contact form</h1>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name" className="text-xl font-semibold">
              Name
            </label>
            <input
              id="name"
              className="bg-white border px-2 py-1 rounded-sm"
              type="text"
              placeholder="enter your name"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="text-xl font-semibold">
              Email
            </label>
            <input
              id="email"
              className="bg-white border px-2 py-1 rounded-sm"
              type="email"
              placeholder="enter your email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="message" className="text-xl font-semibold">
              Message
            </label>
            <textarea
              id="message"
              className="bg-white border px-2 py-1 rounded-sm resize-none h-40"
              type="email"
              placeholder="enter your message"
              name="message"
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Contact;
