import React, { useState } from 'react';

const ReadMoreReadLess = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2>Read More Read Less Button</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
        {!isExpanded && <span id="dots">...</span>}
        {isExpanded && (
          <span id="more">
            erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
          </span>
        )}
      </p>
      <button onClick={handleToggle} id="myBtn">
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
    </div>
  );
};

export default ReadMoreReadLess;
