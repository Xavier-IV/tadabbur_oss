export const Navbar = () => {
  return (
    <>
      <div className="px-10 md:px-20 py-6 flex justify-between items-center">
        <span className='text-2xl'>Tadabbur</span>

        <div className="flex gap-4 items-center">
          <i className="lni lni-search-alt"></i>
          <i className="lni lni-alarm"></i>
          <div className='w-10 h-10 border rounded-full bg-gray-600'></div>
        </div>
      </div>
    </>
  )
}