function MessagesLoadingSkeleton() {
  return (
    <div className="mx-auto px-3" style={{ maxWidth: "900px" }}>
      {[...Array(6)].map((_, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={`skeleton-pulse d-flex mb-4 ${isLeft ? "justify-content-start" : "justify-content-end"}`}
          >
            <div
              className="rounded p-3"
              style={{
                width: "130px",
                height: "30px",
                background: 'linear-gradient(135deg, #3D51D2, #8C49CE)',
                opacity: 0.7,
                animation: "pulse 1.5s ease-in-out infinite"
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default MessagesLoadingSkeleton;
