import { useState } from "react";

export const useCount = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    if (inputText.length < 10) {
      setError("Text must be at least 10 characters long.");
      setText(inputText);
    } else if (inputText.length > 50) {
      setError("Text must be no more than 50 characters long.");
    } else {
      setError("");
      setText(inputText);
    }
  };

  return {
    text,
    count: text.length,
    onChange,
    error,
  };
};
