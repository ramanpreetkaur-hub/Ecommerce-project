import React from 'react'

const EcommerceNav = ({ searchTerm, handleSearch }) => (
    <div>
        <div className="flex justify-between pr-7 pl-7  text-black text-center items-center pt-2 pb-3 font-bold  font-roboto 	">
            <h1>contact number</h1>
            <div className="flex justify-center items-center  gap-24">
                <div className="flex gap-20 justify-center ">
                    <div className="hover:text-black">Home</div>
                    <div className="hover:text-black">Services</div>
                    <div className="hover:text-black">Products</div>
                    <div className="hover:text-black">Contact</div>
                </div>
                {/* first navbar */}
            </div>
        </div>
        {/* second navbar start */}
        <div className="flex justify-between pr-7 pl-7 pt-2 pb-2 bg-orange-200   ">
            <div className="flex ">logo</div>
            <div className="flex justify-center items-center mr-3">
                <div className="relative flex items-center">
                    <input
                        id="search"
                        name="search"
                        placeholder="Search here"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="rounded-md border border-orange-200 bg-white py-3 px-6 w-96 h-12 text-base font-medium text-black outline-none focus:border-white focus:shadow-xl"
                        aria-label="Search input" />
                    <button
                        className="absolute right-2 top-2 bg-orange-400 text-white rounded-md p-2 hover:bg-orange-500"
                        aria-label="Search"
                    >
                        🔍
                    </button>
                </div>
            </div>

            <div className="flex gap-11 items-center   ">
                <button
                    className="rounded-full  hover:bg-gray-100 p-2"
                    aria-label="Cart"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart-dash-fill "
                        viewBox="0 0 16 16"
                    >
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1" />
                    </svg>
                </button>
                <button
                    className="rounded-full hover:bg-gray-100 p-2"
                    aria-label="Wishlist"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                    >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                </button>
                <button
                    className="rounded-full hover:bg-gray-100 p-2"
                    aria-label="Profile"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                </button>
                <button
                    className="rounded-full hover:bg-gray-100 p-2"
                    aria-label="Notifications"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bell"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                    </svg>
                </button>
            </div>

        </div>
    </div>
)

export default EcommerceNav