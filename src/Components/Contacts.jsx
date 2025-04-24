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
      </ul>
    </div>
  );
};

export default ContactUs;
