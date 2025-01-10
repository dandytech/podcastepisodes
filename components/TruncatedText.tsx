function TruncatedText({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) {
  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return <p className="text-gray-800">{truncatedText}</p>;
}

export default TruncatedText;
