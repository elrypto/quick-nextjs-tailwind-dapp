import React from "react";

const SimplePageBlock = ({children}:{children:React.ReactNode}) => (
    <div className="bg-gray-100">
      <div className="flex flex-col p-6 mx-20 space-y-4 rounded-lg shadow-lg bg-gray-50">
        <h2 className="text-cray-600">
          {children}
        </h2>
      </div>
    </div>
)
export default SimplePageBlock;