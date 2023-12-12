import { CaretRight, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import PageBackground from "../components/pageBackground";
import imgBlog1 from '/public/assets/blog/blog1.jpg'
import imgBlog2 from '/public/assets/blog/blog2.jpg'
import imgBlog3 from '/public/assets/blog/blog3.jpg'
import imgBlog4 from '/public/assets/blog/blog4.jpg'
import imgBlog5 from '/public/assets/blog/blog5.jpg'
import imgBlog6 from '/public/assets/blog/blog6.jpg'
import imgBlog7 from '/public/assets/blog/blog7.jpg'
import BlogPageTemplate from '/src/app/components/blog'
import CategoriesBlog from "../components/categoriesBlog";
import Image from "next/image";

export default function BlogPage() {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const recentPostImages = [imgBlog1, imgBlog2, imgBlog3, imgBlog4, imgBlog5, imgBlog6, imgBlog7];

  const recentPosts = [
    {
      date: 'July 10, 2023',
      title: 'Exploring the Benefits of Cardio Workouts',
      tags: ['Cardio', 'Fitness', 'Health'],
    },
    {
      date: 'June 25, 2023',
      title: 'Mastering the Art of Strength Training',
      tags: ['Strength Training', 'Fitness'],
    },
    {
      date: 'June 12, 2023',
      title: 'A Journey into Mindfulness: Meditation Insights',
      tags: ['Meditation', 'Mindfulness'],
    },
    {
      date: 'May 28, 2023',
      title: 'Unlocking the Secrets of Holistic Health',
      tags: ['Health', 'Wellness'],
    },
    {
      date: 'May 15, 2023',
      title: 'Perfecting the Sit-Up Technique for a Strong Core',
      tags: ['Exercise', 'Core Strength'],
    },
    {
      date: 'April 30, 2023',
      title: 'The Transformative Power of Consistent Workouts',
      tags: ['Fitness', 'Exercise'],
    },
    {
      date: 'April 15, 2023',
      title: 'Embracing the Art of Boxing for Fitness and Fun',
      tags: ['Boxing', 'Fitness', 'Fun'],
    },
    // Add more recent posts as needed
  ];

  const tagsForPosts = recentPosts.map(post => post.tags);

  return (
    <section className="w-full">
      <PageBackground name="Blog" />
      <section className="w-full p-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Blog Post 1 */}
          <BlogPageTemplate img={imgBlog1}
            title="The Joy of Running"
            desc="Running is more than just a form of exercise; it&apos;s a journey, a challenge, and a source of joy. Whether you&apos;re pounding the pavement or exploring scenic trails, running offers a unique experience that goes beyond physical fitness. It&apos;s a powerful way to clear your mind, boost your mood, and connect with the world around you. Lace up your shoes, embrace the rhythm of your stride, and let the pavement be your guide on the path to well-being."
            category="Run" />

          {/* Blog Post 2 */}
          <BlogPageTemplate img={imgBlog2}
            title="Discovering Serenity Through Meditation"
            desc="In the midst of our fast-paced lives, meditation stands as a sanctuary of tranquility. Rooted in ancient practices, meditation is a profound journey inward—a moment to pause, breathe, and reconnect with our inner selves. It is not just a technique; it's a way of life that opens doors to mindfulness, clarity, and profound serenity."
            date="December 12, 2022"
            category="Meditation" />

          {/* Blog Post 3 */}
          <BlogPageTemplate
            img={imgBlog3}
            title="Achieving Optimal Health: A Holistic Approach"
            desc="Health is not merely the absence of illness but a state of complete physical, mental, and social well-being. Discover the keys to achieving optimal health through a holistic approach that encompasses nutrition, exercise, mindfulness, and positive lifestyle choices."
            date="January 5, 2023"
            category="Health"
          />

          {/* Blog Post 4 */}
          <BlogPageTemplate
            img={imgBlog4}
            title="Mastering the Art of Sit-Ups for a Strong Core"
            desc="Sit-ups are a fundamental exercise for building a strong core. Learn the proper techniques, variations, and tips to master the art of sit-ups. Strengthening your core not only enhances your physical fitness but also contributes to better posture and overall well-being."
            date="February 20, 2023"
            category="Sit Up"
          />

          {/* Blog Post 5 */}
          <BlogPageTemplate
            img={imgBlog5}
            title="The Power of Consistent Workout Routines"
            desc="Consistency is the key to unlocking the full benefits of your workout routines. Explore the transformative power of consistent exercise, whether you're pursuing strength training, cardiovascular workouts, or a combination of both. Make fitness a part of your lifestyle for long-lasting health and vitality."
            date="March 15, 2023"
            category="Workout"
          />

          {/* Blog Post 6 */}
          <BlogPageTemplate
            img={imgBlog6}
            title="Unleashing Strength and Agility: The Art of Boxing"
            desc="Boxing is more than just a sport; it's an art form that combines strength, agility, and mental focus. Dive into the world of boxing, exploring its physical and mental benefits. Whether you're a seasoned boxer or a beginner, discover how this dynamic activity can elevate your fitness journey."
            date="April 10, 2023"
            category="Boxing"
          />

          {/* Blog Post 7 */}
          <BlogPageTemplate
            img={imgBlog7}
            title="Building a Strong and Healthy Body: A Comprehensive Guide"
            desc="Achieving a strong and healthy body requires a comprehensive approach that includes a balanced diet, regular exercise, and positive lifestyle choices. Explore the essential components of building a resilient and vibrant body that supports your overall well-being. Your journey to a healthier you starts here."
            date="May 8, 2023"
            category="Good Body"
          />
        </div>

        <div className="mb-6">
          <form className="mb-6">
            <div className="w-full flex items-center bg-white border rounded-md">
              <input type="text" name="search" id="search" placeholder="Search"
                className="w-full p-4 rounded-l-md focus:outline-none" />
              <label for="search" className="bg-red p-4 rounded-r-md"><MagnifyingGlass size={28} color="#ffffff" weight="bold" /></label>
            </div>
          </form>
          <div className="p-6 bg-[#f8f8f8] mb-6 shadow-md">
            <h1 className="text-black font-bold text-lg">Categories</h1>
            <hr className="border-t-4 border-red w-[20%] mt-2 mb-4" />
            <CategoriesBlog title="Cardio Workouts" amount={getRandomNumber(1, 10)} />
            <CategoriesBlog title="Strength Training" amount={getRandomNumber(1, 10)} />
            <CategoriesBlog title="Meditation" amount={getRandomNumber(1, 10)} />
            <CategoriesBlog title="Health" amount={getRandomNumber(1, 10)} />
            <CategoriesBlog title="Sit Up" amount={getRandomNumber(1, 10)} />
            <CategoriesBlog title="Workout" amount={getRandomNumber(1, 10)} />
            <CategoriesBlog title="Boxing" amount={getRandomNumber(1, 10)} />
            <CategoriesBlog title="Good Body" amount={getRandomNumber(1, 10)} />
          </div>
          <div className="mb-6 p-6 bg-[#f8f8f8] shadow-md">
            <h1 className="text-black font-bold text-lg">Recent Posts</h1>
            <hr className="border-t-4 border-red w-[20%] mt-2 mb-4" />
            {recentPosts.map((post, index) => (
              <div key={index} className="grid grid-cols-3 gap-2">
                <Image
                  src={recentPostImages[index]}
                  alt={`Blog Post ${index + 1}`}
                  className="w-full h-[100px] object-cover object-center mb-2"
                />
                <div className="col-span-2">
                  <p className="text-sm text-secBlack mb-1">{post.date}</p>
                  <p className="text-black font-semibold">{post.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-6 p-6 bg-[#f8f8f8] shadow-md">
            <h1 className="text-black font-bold text-lg">Popular Tags</h1>
            <hr className="border-t-4 border-red w-[20%] mt-2 mb-4" />
            <div className="flex flex-wrap gap-2 mt-2">
              {tagsForPosts.map((tag, tagIndex) => (
                <span key={tagIndex}
                  className="bg-white text-secBlack font-medium p-2 text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}