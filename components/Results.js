import requests from "../utils/requests";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

export default function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((r) => (
        <Thumbnail key={r.id} result={r} />
      ))}
    </FlipMove>
  );
}
