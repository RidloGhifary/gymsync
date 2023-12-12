import PageBackground from "../components/pageBackground";
import background from '/public/assets/bg1.jpg'

export default function ContactPage() {
  return (
    <section className="w-full">
      <PageBackground name="Contact" />
      <section className="w-full p-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Contact Information */}
        <div className="col-span-1 text-black">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <hr className="border-t-4 border-red w-[20%]" />
          <p className="text-secBlack my-4">
            We would love to hear from you! If you have any questions, inquiries, or just want to say hello,
            please feel free to reach out to us. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p>123 Main Street, Cityville</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Open Hours</h3>
            <p>Monday - Sunday: 24/7</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p>Email: gymsync@email.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {/* Replace the links with your actual social media profiles */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="col-span-1 text-black">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <hr className="border-t-4 border-red w-[20%]" />
          <form>
            <div className="my-4">
              <label htmlFor="name" className="block text-sm font-medium text-secBlack">Your Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 w-full border focus:outline-none" placeholder="Full name*" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-secBlack">Your Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border focus:outline-none" placeholder="Email address*" />
            </div>

            <div className="mb-4">
              <label htmlFor="class" className="block text-sm font-medium text-secBlack">Select Class</label>
              <select id="class" name="class" className="mt-1 p-2 w-full border focus:outline-none">
                <option value="Cardio Blast">Cardio Blast</option>
                <option value="Powerlifting Basics">Powerlifting Basics</option>
                <option value="Yoga Fusion">Yoga Fusion</option>
                <option value="HIIT">HIIT (High-Intensity Interval Training)</option>
                <option value="Spin Cycle">Spin Cycle</option>
                <option value="CrossFit Challenge">CrossFit Challenge</option>
                <option value="Pilates Core">Pilates Core</option>
                <option value="Zumba Party">Zumba Party</option>
                <option value="Bodyweight Bootcamp">Bodyweight Bootcamp</option>
                <option value="Mindful Meditation">Mindful Meditation</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-secBlack">Your Comment</label>
              <textarea id="comment" name="comment" rows="4" className="mt-1 p-2 w-full border focus:outline-none" placeholder="Comment"></textarea>
            </div>

            <button type="submit" className="bg-red text-white text-lg py-3 px-5 font-semibold">Submit</button>
          </form>
        </div>
      </section>
    </section>
  )
}