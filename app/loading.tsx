export default function Loading() {
  return (
    <div className="flex-center fixed inset-0 z-[90] bg-purple-900/70 backdrop-blur-md">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
}
