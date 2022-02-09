function Card({
  title,
  body,
}) {
  return (
    <div className="p-2 bg-slate-600 rounded-md w-1/6">
      <h2 className="font-bold text-slate-200">{title}</h2>
      <p className="text-white">{body}</p>
    </div>
  );
}

export default Card;
