import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Reach out to us:</h1>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="mailto:gdthuranira@gmail.com"
            className="text-blue-600 underline"
          >
            gdthuranira@gmail.com
          </a>
        </li>
        <li>
          <a
            href="mailto:jonesalala95@gmail.com"
            className="text-blue-600 underline"
          >
            jonesalala95@gmail.com
          </a>
        </li>
        <li>
          <a
            href="mailto:elfas.kibet@student.moringaschool.com "
            className="text-blue-600 underline"
          >
            elfas.kibet@student.moringaschool.com
          </a>
        </li>
        <li>
          <a
            href="mailto:vincent.kimani1@student.moringaschool.com "
            className="text-blue-600 underline"
          >
            vincent.kimani1@student.moringaschool.com
          </a>
        </li>
        <li>
          <a
            href="mailto:ruth.iguta@student.moringaschool.com "
            className="text-blue-600 underline"
          >
            ruth.iguta@student.moringaschool.com
          </a>
        </li>
      </ul>
      <div>
        <Link to={"/addBudget"}>
          <button className="bg-[#F59E0B] px-4 rounded cursor-pointer hover:bg-[#4F46E5]">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
