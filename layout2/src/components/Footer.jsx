import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="mb-4">
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l text-gray-800 w-full bg-white"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-r font-medium">
              Send
            </button>
          </div>
        </div>

        {/* Learn More Section */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Learn More</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-300">
                Our Cooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                See Our Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Shop Section */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-300">
                Gift Subscription
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Send Us Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Recipes Section */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Recipes</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-300">
                What to Cook This Week
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Pasta
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Dinner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Healthy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Vegetarian
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Vegan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Christmas
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section with Logo and Copyright */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M20 10C14.5 10 10 15.5 18 24C26 32.5 30.5 24 30 20C29.5 16 25.5 10 20 10Z"
                fill="#1F2937"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold">Chefify</span>
        </div>
        <div className="text-sm text-gray-400">
          <span>2023 Chefify Company</span>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
