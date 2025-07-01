function Contact() {
  return (
    <section id="contact" className="flex flex-col text-center">
      <h1 className="text-3xl font-bold mb-10">Contact</h1>

      <form action="" className="flex flex-col gap-[30px] md:gap-[40px] items-center">
        <div className="flex flex-col mt-4">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="h-[50px] pl-4 rounded-[20px] border border-gray-500 w-[250px] md:w-[600px] xl:w-[800px] bg-[var(--background-color)] text-[var(--form-text-color)] placeholder-[var(--form-text-color)]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="h-[50px] pl-4 rounded-[20px] border border-gray-500 w-[250px] md:w-[600px] xl:w-[800px] bg-[var(--background-color)] text-[var(--form-text-color)] placeholder-[var(--form-text-color)]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="h-[250px] pt-4 pl-4 resize-none rounded-[20px] border border-gray-500 w-[250px] md:w-[600px] xl:w-[800px] bg-[var(--background-color)] text-[var(--form-text-color)] placeholder-[var(--form-text-color)]"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Submit"
          className="w-[126px] h-[50px] bg-[var(--btn-color)] text-[var(--btn-text-color)] text-lg font-bold rounded-[20px] shadow-md transition-all duration-200 ease-in-out hover:scale-105 active:translate-y-[2px] active:shadow-sm"
        />
      </form>
    </section>
  );
}

export default Contact;