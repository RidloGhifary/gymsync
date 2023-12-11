import Image from 'next/image'
import paintScratch from '/public/assets/paint-scratch.svg'
import Link from 'next/link';

export default function LatestBlog() {

  const BlogCard = ({ date, title, content }) => (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <p className="text-secBlack mb-1">{date}</p>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="text-secBlack mb-4">{content}</p>
      <Link href="/blog" className="bg-red text-white px-4 py-2 rounded-full hover:bg-red/70 transition duration-300">
        Read More
      </Link>
    </div>
  );

  const blogs = [
    {
      date: 'July 15, 2023',
      title: 'Unlocking the Secrets of Effective Cardio Workouts',
      content: 'Discover the science behind a successful cardio routine and how it can elevate your overall fitness. Explore various techniques and tips for maximizing your cardiovascular exercise.',
    },
    {
      date: 'July 8, 2023',
      title: 'Mindful Eating: A Guide to Healthy Nutrition Habits',
      content: 'Learn about the concept of mindful eating and its impact on your overall well-being. Find practical tips and advice on incorporating mindfulness into your daily nutrition habits.',
    },
    {
      date: 'July 1, 2023',
      title: 'Building Strength: The Importance of Resistance Training',
      content: 'Uncover the benefits of resistance training and how it contributes to muscle development, metabolism, and overall strength. Get insights into creating an effective resistance training routine.',
    },
  ];

  return (
    <section className="w-full bg-white p-6 py-16">
      <div className="text-center mb-8 md:w-[70%] lg:w-[50%] mx-auto">
        <div className='w-full text-center md:w-[70%] mx-auto'>
          <Image src={paintScratch} alt="paintScratch" className='mx-auto' />
          <span className='font-semibold text-white block mt-[-28px]'>latest blog</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-black my-6">Discover Our Membership Plans</h2>
        <p className="text-black">
          Elevate your fitness journey with our diverse membership options. Whether you&apos;re seeking basic access or premium perks, we have flexible plans to suit every fitness enthusiast. Explore our pricing details below and choose the plan that aligns with your goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} date={blog.date} title={blog.title} content={blog.content} />
        ))}
      </div>
    </section>
  )
} 