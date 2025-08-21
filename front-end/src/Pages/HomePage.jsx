import React from "react";
import DropDowns from "../Components/DropDown";
import Container from "../Components/Container";

const HomePage = () => {
  const news = [
    {
      id: 1,
      title: "Student Portal Maintenance",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
      detail: "System / Tech",
      duration: "July 7 to July 9, 2025",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae vel doloribus! Ab dignissimos iusto repudiandae, unde ut quod eos quia atque molestias deleniti non amet voluptatum explicabo assumenda eaque!",
    },
    {
      id: 2,
      title: "Student Portal Maintenance",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      detail: "System / Tech",
      duration: "July 7 to July 9, 2025",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae vel doloribus! Ab dignissimos iusto repudiandae, unde ut quod eos quia atque molestias deleniti non amet voluptatum explicabo assumenda eaque!",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Key highlights from the 'Study Abroad Pathway with SBS' Webinar",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // students studying
    },
    {
      id: 2,
      title: "Key highlights from the 'Study Abroad Pathway with SBS' Webinar",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // online webinar style
    },
    {
      id: 3,
      title: "Key highlights from the 'Study Abroad Pathway with SBS' Webinar",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // lecture hall
    },
  ];

  return (
    <section className="p-10">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-font">News</h1>
          <DropDowns />
        </div>
        <div>
          {news.map((el) => (
            <div
              key={el.id}
              className={`${
                news.indexOf(el) % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } flex items-start p-5 bg-white rounded-xl shadow-md mb-5 gap-5`}
            >
              {/* Image */}
              <div className="w-64 h-40 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={el.image}
                  alt={el.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <h1 className="text-xl font-semibold text-gray-800">
                  {el.title}
                </h1>

                <div className="flex items-center gap-3 mt-1">
                  <p className="text-sm text-gray-600">{el.detail}</p>
                  <p className="text-xs text-gray-400">({el.duration})</p>
                </div>

                <p className="text-sm text-gray-700 text-justify mt-5">
                  {el.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-2xl text-font my-5">Announcements</h1>
          <div className="flex justify-between gap-5">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 w-100"
              >
                {/* Image */}
                <div className="h-40 w-full overflow-hidden rounded-md">
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {announcement.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
