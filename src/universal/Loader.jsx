export const GrayLoader = () => {
  return <div className="spinner"></div>;
};

export const GrayLoaderMini = () => {
  return <div className="spinner2 inline-flex  align-middle  mr-4 text-white"></div>;
};

export const FullPageLoader = () => {
  return (
    <div className="w-full h-screen flex overflow-y-hidden items-center justify-center">
      <GrayLoader />
    </div>
  );
};

export const WeeklyChartLoader = () => {
  return (
    <>
      <div className="w-full lg:w-1/3 p-2">
        <div className="mx-auto border-none shadow px-5 py-3 rounded-lg bg-gray-50 animate-pulse">
          <p className="my-4 w-16 h-4 bg-gray-200 animate-pulse rounded"></p>
          <p className="my-4 w-24 h-4 bg-gray-200 animate-pulse rounded"></p>

          <div className="w-full bg-gray-100 animate-pulse h-48 rounded"></div>
        </div>
      </div>
    </>
  );
};

export const PayChartLoader = () => {
  return (
    <>
      <div className="w-full lg:w-1/3 p-2">
        <div className="shadow px-5 py-5 bg-gray-50 animate-pulse rounded-lg">
          <p className="my-4 w-16 h-4 bg-gray-200 animate-pulse rounded"></p>
          <p className="my-4 w-24 h-4 bg-gray-200 animate-pulse rounded"></p>

          <div className="w-full bg-gray-100 animate-pulse h-36 rounded"></div>
        </div>

        <div className="shadow px-5 py-5 bg-gray-50 animate-pulse mt-3 rounded-lg">
          <p className="my-4 w-16 h-4 bg-gray-200 animate-pulse rounded"></p>
          <p className="my-4 w-24 h-4 bg-gray-200 animate-pulse rounded"></p>

          <div className="w-full bg-gray-100 animate-pulse h-36 rounded"></div>
        </div>
      </div>
    </>
  );
};

export const TodaySaleLoader = () => {
  return (
    <>
      <div className="shadow w-full py-4 px-3 my-2 text-gray-600 rounded-lg bg-gray-50 animate-pulse">
        <div className="flex justify-between text-sm">
          <p className="bg-gray-200 animate-pulse h-6 w-24 rounded"></p>
          <p className="bg-gray-200 animate-pulse h-6 w-10 rounded"></p>
        </div>

        <div className="flex justify-between text-sm my-3">
          <p className="bg-gray-200 animate-pulse h-6 w-36 rounded"></p>
        </div>
      </div>

      <div className="shadow w-full py-4 px-3 my-2 text-gray-600 rounded-lg bg-gray-50 animate-pulse">
        <div className="flex justify-between text-sm">
          <p className="bg-gray-200 animate-pulse h-6 w-24 rounded"></p>
          <p className="bg-gray-200 animate-pulse h-6 w-10 rounded"></p>
        </div>

        <div className="flex justify-between text-sm my-3">
          <p className="bg-gray-200 animate-pulse h-6 w-36 rounded"></p>
        </div>
      </div>

      <div className="shadow w-full py-4 px-3 my-2 text-gray-600 rounded-lg bg-gray-50 animate-pulse">
        <div className="flex justify-between text-sm">
          <p className="bg-gray-200 animate-pulse h-6 w-24 rounded"></p>
          <p className="bg-gray-200 animate-pulse h-6 w-10 rounded"></p>
        </div>

        <div className="flex justify-between text-sm my-3">
          <p className="bg-gray-200 animate-pulse h-6 w-36 rounded"></p>
        </div>
      </div>
    </>
  );
};

export const GrayLoaderBlock = ({ h = "h-48" }) => (
  <div className={`w-full ${h} flex items-center justify-center`}>
    <GrayLoader />
  </div>
);

export const CardBlockLoader = () => {
  return (
    <div className="shadow w-full py-4 px-3 my-2 text-gray-600 rounded-lg bg-gray-50 animate-pulse">
      <div className="flex justify-between text-sm">
        <p className="bg-gray-200 animate-pulse h-6 w-24 rounded"></p>
        <p className="bg-gray-200 animate-pulse h-6 w-10 rounded"></p>
      </div>

      <div className="flex justify-between text-sm my-3">
        <p className="bg-gray-200 animate-pulse h-6 w-36 rounded"></p>
      </div>
    </div>
  );
};

export const BlogCardLoader = () => {
  return (
    <div className="block p-5 shadow-lg rounded animate-pulse">
      <div className="aspect-w-16 aspect-h-9 h-32 rounded-md bg-gray-200"></div>
      {/* <h3 className="mt-4 mb-2 font-bold bg-gray-200 h-6 w-5/6 rounded"></h3> */}
      <p className="mb-2 mt-3">
        <span className="font-bold bg-gray-200 h-4 w-16 rounded inline-block"></span>
      </p>
      <p className="text-sm text-gray-500 bg-gray-200 h-4 w-32 rounded"></p>
    </div>
  );
};



export const PieChartLoader = () => {
  return (
    <div className="shadow w-full py-4 px-3 my-2 text-gray-600 rounded-lg bg-gray-50 animate-pulse">
      <div className="flex justify-between text-sm">
        <p className="bg-gray-200 animate-pulse h-6 w-1/2 rounded"></p>
      </div>

      <div className="flex justify-between text-sm my-3">
        <div className="w-48 h-48 bg-gray-200 animate-pulse rounded-full mx-auto "></div>
      </div>
    </div>
  );
};

// import wifi from "../../assets/loaders/wifi.gif";
// import Ripple from "../../assets/loaders/Ripple.svg";
// import Vanilla from "../../assets/loaders/Vanilla.svg";

// export const WifiLoader = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <img src={wifi} alt="Loading..." />
//     </div>
//   );
// };

// export const RippleLoader = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <img src={Ripple} alt="Loading..." />
//     </div>
//   );
// };

export const VanillaLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={Vanilla} alt="Loading..." />
    </div>
  );
};



export const FullPageCardLoader = ({card_count=4}) => {
 
  const array_count = Array.from({length:card_count})



return (
  <div className="w-full flex flex-wrap">
     {
      array_count.map(x=>
          
          <div className="w-full lg:w-1/4 p-2" key={x}>
          <CardBlockLoader />
      </div>
          )
     }       
  </div>
)
}


export const FullPageBlogCardLoader = ({card_count=12}) => {
 
  const array_count = Array.from({length:card_count})



return (
  <div className="w-full flex flex-wrap">
     {
      array_count.map(x=>
          
          <div className="w-full lg:w-1/4 p-2" key={x}>
          <BlogCardLoader />
      </div>
          )
     }       
  </div>
)
}