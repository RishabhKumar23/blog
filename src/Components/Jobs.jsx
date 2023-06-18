import React from 'react'

const Jobs = () => {

  const jobs = [
    {
      id: 1,
      title: 'Web Developer',
      name: "Google",
      exp: "0-1yr",
      ctc: "5lpa"
    },
    {
      id: 2,
      title: 'Python Developer',
      name: "Meta",
      exp: "2yr",
      ctc: "8lpa"
    },
    {
      id: 3,
      title: 'Shoftware Engineer',
      name: "Google",
      exp: "5yr",
      ctc: "15lpa"
    },
    {
      id: 4,
      title: 'Fontend Developer',
      name: "Google",
      exp: "10yr",
      ctc: "55lpa"
    },
    {
      id: 5,
      title: 'Sesenior Engineering ',
      name: "Microshoft",
      exp: "15-20yr",
      ctc: "1.5cr"
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center container mx-auto py-8 ml-1.5">
        <h2 className="text-2xl font-bold mb-4">Jobs</h2>
        <ul className="w-full max-w-lg overflow-y-scroll h-screen">
          {jobs?.map((job) => (
            <li
              key={job.id}
              className="bg-white rounded shadow p-4 mb-4 sm:flex sm:items-center sm:justify-between hover:shadow-2xl hover:shadow-gray-500"
            >
              <div className='flex flex-col sm:flex-col sm:items-center'>
                <div className="flex flex-col sm:flex-col sm:items-center xl:gap-1">
                  <span className="text-lg font-semibold mr-2">{job.title}</span>
                  <h3 className='text-sm mr-2'>{job.name}</h3>
                  <hr />
                </div>
                <div className='flex flex-col sm:flex-row sm:items-center gap-1 xl:gap-2'>
                  <label>exp:</label> 
                  <span className="text-sm text-gray-500">{job.exp}</span>
                </div>
                <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                  <label>ctc:</label> 
                  <span className="text-sm text-gray-500">{job.ctc}</span>
                </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    apply
                  </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Jobs