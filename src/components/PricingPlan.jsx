import React from "react";

const PricingPlan = ({ color, title, price, button, itemList }) => {
  // Define a mapping of color keys to actual Tailwind color classes
  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
    quaternary: "bg-quaternary",
  };

  const selectedColorClass = colorClasses[color] || "bg-gray-500"; // Default if the color key is not found

  return (
    <div>
      <div className={`w-full ${selectedColorClass} text-xl text-center text-white py-6 rounded-t-lg`}>
        <h2>{title}</h2>
      </div>
      <div className="w-full bg-white py-4 rounded-b-lg">
        <h3 className="text-3xl text-center font-bold">{price}</h3>
        <ul>
          {itemList.map((item, index) => (
            <div key={index} className="flex px-6 py-2 items-center gap-2">
              <div className={`w-2 h-2 ${selectedColorClass} rounded`}></div>
              <li className="py-1">{item}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="px-4">
        <button className={`text-${color} font-semibold border border-${color} w-full py-2 rounded-lg`}>
          {button}
        </button>
      </div>
    </div>
  );
};

export default PricingPlan;
