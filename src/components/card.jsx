export function Card({ children, className = "" }) {
  return (
    <div className={` shadow-md rounded-2xl  ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`px-6 py-2 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`px-6 py-0 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`px-6 py-2  text-sm text-gray-600 ${className}`}>
      {children}
    </div>
  );
}
