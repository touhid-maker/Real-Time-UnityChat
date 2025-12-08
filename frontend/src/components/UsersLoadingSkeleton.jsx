
function UsersLoadingSkeleton() {
  return (
    <div className="py-3">
      {[1, 2, 3,4,5].map((item) => (
        <div
          key={item}
          className="p-2 px-3 rounded-2 mb-2 skeleton-pulse clickable"
        >
          <div className="d-flex align-items-center">
            {/* Avatar Circle */}
            <div
              className="rounded-circle me-3 skeleton-pulse"
              style={{ height: "40px", width: "40px", background: "#4f4f4f" }}
            ></div>

            {/* Text Lines */}
            <div className="flex-grow-1">
              <div
                className="rounded-1 mb-2 skeleton-pulse"
                style={{ height: "12px", width: "75%", background: "#4f4f4f" }}
              ></div>

              <div
                className="rounded-1 skeleton-pulse"
                style={{ height: "8px", width: "50%", background: "#4f4f4f" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersLoadingSkeleton;
