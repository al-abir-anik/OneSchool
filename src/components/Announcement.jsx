"use client"

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400 cursor-pointer hover:underline">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-aaaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            aliquid maiores adipisci odio amet, ea dolores fugit vero? Quia,
            reiciendis.
          </p>
        </div>
        <div className="bg-aaaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            aliquid maiores adipisci odio amet, ea dolores fugit vero? Quia,
            reiciendis.
          </p>
        </div>
        <div className="bg-aaaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            aliquid maiores adipisci odio amet, ea dolores fugit vero? Quia,
            reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
