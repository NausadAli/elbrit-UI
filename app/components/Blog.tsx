import React from 'react'
import Blog_ele from './Blog_ele'

const Blog = () => {
  return (
    <div className='my-4 md:h-dvh'>
      {/* Header Section */}
      <div className="text-center my-2">
        <h3 className="text-[#003569] font-jost font-medium text-sm uppercase my-2">
          Our Blog
        </h3>
        <h1 className="text-[#17414F] font-jost font-semibold text-4xl my-3">Latest News</h1>
      </div>

      {/* Blog Section */}
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-2 w-dvw my-4">
        <div className="flex flex-col items-center gap-2">
          <Blog_ele
            date="21 Oct"
            text="The Covid Epidemic 2023 is back"
            img="/images/meds-1.png"
            img_alt="news image"
          />
          <Blog_ele
            date="02 Jan"
            text="The Covid Epidemic 2022 is back"
            img="/images/meds-2.png"
            img_alt="news image"
            heightClass="h-[24dvh]"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Blog_ele
            date="20 Jan"
            text="The Covid Epidemic is back again"
            img="/images/meds-2.png"
            img_alt="news image"
            heightClass="h-[24dvh]"
          />
          <Blog_ele
            date="20 Mar"
            text="The Covid Epidemic 2022 is back"
            img="/images/meds-1.png"
            img_alt="news image"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Blog_ele
            date="20 Apr"
            text="The Covid Epidemic 2023 is back"
            img="/images/meds-1.png"
            img_alt="news image"
          />
          <Blog_ele
            date="20 Apr"
            text="The Covid Epidemic 2024 is back"
            img="/images/meds-2.png"
            img_alt="news image"
            heightClass="h-[24dvh]"
          />
        </div>
        <div className="flex flex-col items-center gap-2 sm:hidden md:hidden lg:block">
          <Blog_ele
            date="20 Apr"
            text="The Covid Epidemic 2023 is back"
            img="/images/meds-2.png"
            img_alt="news image"
            heightClass="h-[24dvh]"
          />
          <Blog_ele
            date="20 Apr"
            text="The Covid Epidemic 2023 is back"
            img="/images/meds-1.png"
            img_alt="news image"
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
