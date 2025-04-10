import React from "react";
import { Bookmark } from "lucide-react";

export default function EditorsPick() {
  const recipes = [
    {
      id: 1,
      title: "Stuffed sticky rice ball",
      duration: "34 minutes",
      author: "Jennifer King",
      description:
        "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
      image:
        "https://www.theodysseyonline.com/media-library/image.jpg?id=21074623&width=210",
      authorImage: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      title: "Strawberry smoothie",
      duration: "40 minutes",
      author: "Matthew Martinez",
      description:
        "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
      image:
        "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      authorImage: "https://randomuser.me/api/portraits/men/43.jpg",
    },
    {
      id: 3,
      title: "Latte Art",
      duration: "19 minutes",
      author: "Sarah Hill",
      description:
        "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      title: "Butter fried noodles",
      duration: "18 minutes",
      author: "Julia Lopez",
      description:
        "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
      image:
        "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      authorImage: "https://randomuser.me/api/portraits/women/81.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-pink-500 mb-2">
        Editor's pick
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="shadow rounded-lg p-4 flex gap-4 relative"
          >
            <div className="w-1/3">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>

            <div className="w-2/3 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {recipe.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">{recipe.duration}</p>

                <div className="flex items-center mb-3">
                  <img
                    src={recipe.authorImage}
                    alt={recipe.author}
                    className="w-8 h-8 rounded-full mr-2 object-cover"
                  />
                  <p className="text-sm font-medium">{recipe.author}</p>
                </div>

                <p className="text-gray-600 text-sm">{recipe.description}</p>
              </div>
            </div>

            <button className="absolute top-4 right-4 text-pink-500">
              <Bookmark size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
