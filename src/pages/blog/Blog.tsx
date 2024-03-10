import useDocTitle from "../../hooks/useDocTitle";

const Blog = () => {
  useDocTitle("Blog");
  const data = [
    {
      id: 1,
      question:
        "What is a musical instrument?",
      answer:
        "A musical instrument is a device for producing musical sounds, categorized into percussion, wind, string, and keyboard types, each with distinct playing techniques and characteristics.",
    },
    {
      id: 2,
      question: "What is music?",
      answer:
        "Music is the art of arranging sounds in a harmonious and expressive manner, conveying emotions, stories, and cultural messages through rhythm, melody, and harmony.",
    },
    {
      id: 3,
      question: "What is the most popular musical instrument?",
      answer:
        "The guitar is one of the most popular musical instruments worldwide, revered for its versatility across genres and its ubiquity in bands and solo performances. Its wide appeal makes it a staple in countless musical compositions and performances.",
    },
    {
      id: 4,
      question: "What is the most popular Bangladeshi musical instrument?",
      
      answer:
        "The tabla and harmonium are popular traditional musical instruments in Bangladesh, often used in classical, folk, and devotional music.",
    },
  ];

  return (
    <div>
      <h1 className="header-style">Blog</h1>
      <div className="inner-width mx-auto mb-20 space-y-4">
        {data.map((blog) => (
          <details key={blog.id} className="group">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
              <h2 className="font-medium text-gray-900">{blog.question}</h2>

              <svg
                className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              {blog.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Blog;
