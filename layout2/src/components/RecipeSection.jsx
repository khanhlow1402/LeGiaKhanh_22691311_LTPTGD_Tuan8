import { Bookmark } from "lucide-react";

const recipes = [
  {
    title: "Italian-style tomato salad",
    time: "10 minutes",
    img: "https://media.istockphoto.com/id/997092136/vi/anh/%C4%91%E1%BA%A7u-salad-caprese.jpg?s=612x612&w=0&k=20&c=PH1qIGCknlzVoCdTuVWte2NIcsBBVXrDvO0QBJiay9c=", // salad cà chua Ý
  },
  {
    title: "Spaghetti with vegetables and shrimp",
    time: "15 minutes",
    img: "https://images.pexels.com/photos/4518880/pexels-photo-4518880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // mì Ý tôm rau củ
  },
  {
    title: "Lotus delight salad",
    time: "20 minutes",
    img: "https://marleyspoon.com/media/recipes/91904/main_photos/medium/red-8be935f6fcb073b6738af34d66d62ca5.jpeg", // gỏi ngó sen tôm thịt
  },
  {
    title: "Snack cakes",
    time: "21 minutes",
    img: "https://images.pexels.com/photos/4040806/pexels-photo-4040806.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200", // bánh snack
  },
];

const videoRecipes = [
  {
    title: "Salad with cabbage and shrimp",
    time: "32 minutes",
    img: "https://images.pexels.com/photos/3045731/pexels-photo-3045731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // bắp cải tôm thịt
  },
  {
    title: "Salad of cove beans and potatoes",
    time: "20 minutes",
    img: "https://file.hstatic.net/1000282430/article/avocado-beans-cooked-1640769_86f524adaf1c4e389727e022164ba279_master_6fc9fe49c53c4f8bb4909b22cf96bbea_1024x1024.jpg", // đậu que khoai tây
  },
  {
    title: "Sunny-side up fried egg",
    time: "15 minutes",
    img: "https://nld.mediacdn.vn/291774122806476800/2024/1/20/shutterstock1048036531-754x503-1705717855312655037826.jpg", // trứng ốp la
  },
  {
    title: "Lotus delight salad",
    time: "20 minutes",
    img: "https://photo2.tinhte.vn/data/attachment-files/2025/04/8690275_lich-su-cai-nia-cover.jpg", // reuse hình trên
  },
];

const Section = ({ title, subtitle, items }) => (
  <section className="text-center py-10">
    <h2 className="text-3xl font-bold text-pink-600 mb-2">{title}</h2>
    <p className="text-gray-500 mb-6">{subtitle}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-16">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition duration-300"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-left relative">
            <h3 className="font-semibold text-sm">{item.title}</h3>
            <span className="text-pink-500 text-xs mt-1 block">
              {item.time}
            </span>
            <Bookmark
              size={18}
              className="absolute top-4 right-4 text-pink-500 hover:text-pink-600 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default function RecipeSection() {
  return (
    <div className="bg-white">
      <Section
        title="This Summer Recipes"
        subtitle="We have all your Independence Day sweets covered."
        items={recipes}
      />
      <Section
        title="Recipes With Videos"
        subtitle="Cooking Up Culinary Creations with Step-by-Step Videos"
        items={videoRecipes}
      />
    </div>
  );
}
