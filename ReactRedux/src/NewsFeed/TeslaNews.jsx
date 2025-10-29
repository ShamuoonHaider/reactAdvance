import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeslaData } from "./TeslaSlice";

const TeslaNews = () => {
  const dispatch = useDispatch();
  const { loading, articles, err } = useSelector((state) => state.tesla);
  const [showhelpText, setShowHelpText] = useState(false);
  useEffect(() => {
    dispatch(fetchTeslaData());
  }, [dispatch]);

  // Debug: Check what data you're getting

  if (loading) return <p>tesla news are loading..</p>;
  if (err) return <p>{err}</p>;

  return (
    <div>
      {articles && articles.length > 0 ? (
        articles.map((item, index) => (
          <div className="flex flex-col  max-w-10/13" key={item.id}>
            {" "}
            <div className=" border-2 border-slate-600 rounded-2xl p-10 m-10 relative">
              <h3 className="text-2xl font-bold mb-5">{item.title}</h3>
              <p className="text-amber-500">Author: {item.author}</p>
              <p className="text-xl mb-5">{item.description}</p>
              <a
                href={item.url}
                alt={item.url}
                target="_blank"
                className="relative"
              >
                {
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    onMouseEnter={() => setShowHelpText(index)}
                    onMouseLeave={() => setShowHelpText(false)}
                    className="rounded-2xl"
                  />
                }
                {showhelpText === index && (
                  <div className="absolute top-1 left-1 text-lg transition-opacity ease-in duration-800 bg-gray-800 text-blue-500 px-2 rounded-md">
                    Click on image to see more
                  </div>
                )}
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No articles found</p>
      )}
    </div>
  );
};

export default TeslaNews;
