import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeslaData } from "./TeslaSlice";

const TeslaNews = () => {
  const dispatch = useDispatch();
  const { loading, articles, err } = useSelector((state) => state.tesla);

  useEffect(() => {
    dispatch(fetchTeslaData());
  }, [dispatch]);

  // Debug: Check what data you're getting

  if (loading) return <p>tesla news are loading..</p>;
  if (err) return <p>{err}</p>;

  return (
    <div>
      {articles && articles.length > 0 ? (
        articles.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h3>{item.title || "No title"}</h3>
            <p>Author: {item.author || "Unknown"}</p>
            <p>{item.description || "No description"}</p>
            <a href={item.url} target="_blank" className="text-blue-500">
              <img src={item.urlToImage} alt={item.title} />
              {item.url}
            </a>
            <p>{item.content}</p>
          </div>
        ))
      ) : (
        <p>No articles found</p>
      )}
    </div>
  );
};

export default TeslaNews;
