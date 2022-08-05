export default function Index() {
  return (
    <div className="w-full h-screen bg-gray-100 text-center items-center flex flex-col">
      <h1 className="p-10 m-10 text-center items-center text-8xl text-cyan-500 bg-gray-200">Welcome to Remix</h1>

      <ul className="w-full flex flex-col">
        <li className="text-xl lg:text-4xl m-2 lg:m-8">
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>

        <li className="text-xl lg:text-4xl m-2 lg:m-8">
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>

        <li className="text-xl lg:text-4xl m-2 lg:m-8">
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
