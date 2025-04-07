"use client";

import React, { useState } from 'react';

function LastRefresh() {
  const [lastRefresh] = useState(new Date());

  return (
    <p className='fixed bottom-2 text-sm font-light transition-colors'>
      Last Refresh: {lastRefresh.toLocaleTimeString()}
    </p>
  );
}

export default LastRefresh;