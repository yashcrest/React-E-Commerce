import Skeleton from "react-loading-skeleton";

const LoadingSkeleton = ({ type }) => {
  if (type === "product") {
    return (
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6 py-3">
            <Skeleton height={400} width={400} />
          </div>
          <div className="col-md-5 py-5">
            <Skeleton height={90} width={250} />
            <Skeleton height={30} width={100} />
            <Skeleton height={90} />
          </div>
        </div>
      </div>
    );
  }

  if (type === "similar") {
    return (
      <div className="my-4 py-4">
        <div className="d-flex">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div className="mx-4" key={idx}>
              <Skeleton height={400} width={250} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default LoadingSkeleton;
