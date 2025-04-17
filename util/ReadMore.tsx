import React, { useState } from "react";

function ReadMore({ text, maxLength }: { text: string; maxLength: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const previewText = text.slice(0, maxLength);

  return (
    <div>
      <p className="text-gray-800">{isExpanded ? text : `${previewText}...`}</p>
      <button
        onClick={toggleReadMore}
        className="text-[#8A226F] text-[12px] font-sans font-[500]"
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}

export default ReadMore;
