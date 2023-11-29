import React from 'react';

const SuccessStories = () => {
  // Assume these values are fetched from your database or backend
  const successStories = [
    {
      coupleImage: 'https://i.ibb.co/59VTJCQ/5c87f7e6b2001ab7c822765dec377e6e.jpg',
      marriageDate: '2022-05-15',
      reviewStar: 5,
      successStoryText: 'We found love on this amazing platform and got married. It was the best decision of our lives!',
    },
    {
      coupleImage: 'https://i.ibb.co/bzvxHJG/486c0d2f8dd78869fe96091210fa6a41.jpg',
      marriageDate: '2022-08-23',
      reviewStar: 4,
      successStoryText: 'Thanks to this website, we are happily married! The journey was incredible, and we are grateful for the connection.',
    },
    // Add more success stories as needed
  ];

  // Sort success stories based on marriage date in descending order
  const sortedSuccessStories = successStories.sort((a, b) => new Date(b.marriageDate) - new Date(a.marriageDate));

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Success Stories</h2>

        {sortedSuccessStories.map((story, index) => (
          <div key={index} className="mb-8 p-6 bg-white rounded-md shadow-md">
            <div className="mb-4">
              <img className="inline-block h-12 w-12 rounded-full" src={story.coupleImage} alt="Couple" />
            </div>
            <p className="text-gray-700 mb-2">Marriage Date: {story.marriageDate}</p>
            <div className="flex items-center mb-2">
              <p className="text-gray-700 mr-2">Review Star:</p>
              {/* You can use a rating component here based on the reviewStar value */}
              {Array.from({ length: story.reviewStar }, (_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 fill-current" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1a1 1 0 011 1v7h4a1 1 0 010 2h-4v7a1 1 0 01-2 0V11H5a1 1 0 010-2h4V2a1 1 0 011-1z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700">{story.successStoryText}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default SuccessStories;
