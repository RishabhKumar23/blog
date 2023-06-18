import React from 'react'

const Events = () => {

  const events = [
    {
      id: 1,
      img: "https://img.freepik.com/free-vector/elegant-event-party-banner-with-black-splash_1361-2171.jpg",
      title: 'Event 1',
      date: '2023-06-20',
      description: ""
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-vector/gradient-new-year-social-media-cover-template_23-2149205390.jpg",
      title: 'Event 2',
      date: '2023-06-25',
      description: ""
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-vector/elegant-event-party-banner-with-black-splash_1361-2171.jpg",
      title: 'Event 3',
      date: '2023-07-30',
      description: ""
    },
    {
      id: 4,
      img: "https://images.examples.com/wp-content/uploads/2019/05/Events-Social-Media-Banners.jpg",
      title: 'Event 4',
      date: '2023-08-12',
      description: ""
    },
    {
      id: 5,
      img: "https://www.mail-signatures.com/wp-content/uploads/2017/04/Signature-with-banner_4.png",
      title: 'Event 5',
      date: '2023-09-1',
      description: ""
    }
  ];

  return (
    <>
      <div className="flex flex-col items-center container mx-auto py-8 ml-1.5">
        <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 overflow-y-scroll h-screen shadow-2xl">
          {events?.map((event) => (
            <div key = { event.id } className="bg-white p-4 hover:shadow-2xl hover:shadow-gray-500">
              <span className="text-lg font-semibold mr-2">{event.title}</span>
              <img className="text-xl font-boldmb-4 rounded-md" src={event.img} alt={event.title} />
              <span className="text-lg mr-2">{event.description}</span>
              <span className="text-sm text-gray-500">{event.date}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Events