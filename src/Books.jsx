export default function Books() {
  const books_array = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
    { id: 3, title: "Book 3", author: "Author 3" },
  ];
  return (
    <div>
      <ul>
        {books_array.map((book) => (
          <li key={book.id}>
            {book.id} | {book.title} | {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
