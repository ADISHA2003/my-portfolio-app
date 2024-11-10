
export default function Portfolio() {
  const projects = [
    {
      title: 'Chatter',
      description: 'An AI-powered chatbot application. Users can interact with the bot for various queries and information.',
      image: 'https://img.freepik.com/premium-photo/3d-robot-hand-touching-screen_967785-54802.jpg',
      link: 'https://botchatter.vercel.app',
    },
    {
      title: 'Weather App',
      description: 'A weather application that displays current weather conditions, forecasts, and more.',
      image: 'https://jknewstoday.com/wp-content/uploads/2021/09/weather.png',
      link: 'https://get-weather-app-cyan.vercel.app',
    },
    {
      title: 'AI Nexs',
      description: 'A curated collection of AI websites and tools, ready to explore and utilize.',
      image: 'https://th.bing.com/th/id/OIP.fAzeKvKWSCDUw0r_3U7RfgAAAA',
      link: 'https://ainexs.netlify.app',
    },
    {
      title: 'Amazon Clone',
      description: 'A clone of the Amazon website, showcasing product listings, search functionality, and more.',
      image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202305/107168822-1671538596693-gettyimages-1443880219-2a5a9193_8cc60243-f700-4596-b223-91ea0c1508c3-sixteen_nine.jpg?size=948:533',
      link: 'https://adisha2003.github.io/Amazon-clone',
    },
    {
      title: 'AI-powered search',
      description: 'An AI powered search engine.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIt3zKKlBZ0pMXhNRAEu5ZLTMlAnNBcdKoA&s',
      link: 'https://ai-powered-search.vercel.app',
    },
    {
      title: '3D project',
      description: 'A 3D project built using Three.js',
      image: 'https://tiiny.host/blog/assets/images/1_adcnxab1qc_5kf8juxdeya.png',
      link: 'https://3js-mu.vercel.app/',
    },
    {
      title: '3D solar system',
      description: 'A 3D Solar System with Meteors and Planetary Movement using Three.js',
      image: 'https://cdn.mos.cms.futurecdn.net/v5n22xGyNNHLzSnSArbrVH.jpg',
      link: 'https://three-js-space-simultor.vercel.app',
    },
    {
      title: 'Sentiment Analysis Web App',
      description: 'An app that uses sentiment analysis to provide supportive feedback based on user input.',
      image: 'https://media.licdn.com/dms/image/D5612AQGcQx1GrbrD7w/article-cover_image-shrink_600_2000/0/1689223953046?e=2147483647&v=beta&t=DbEktezMbZgUcgj6BuG6nbrAvRO8IE7dFMkd_fK_ygU',
      link: 'https://adisha2003.pythonanywhere.com',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded
                    hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}