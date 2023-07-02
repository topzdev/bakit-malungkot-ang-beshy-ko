"use client";

import classNames from "classnames";
import React, {
  createRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Button from "./Button";
import Snackbar from "./Snackbar";

type Props = {};

const Content = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [text, setText] = useState("");

  const [snackbar, setSnackbar] = useState({
    message: "",
    show: false,
  });

  const onCloseSnackbar = (value: boolean) => {
    setSnackbar((val) => ({ ...val, show: value }));
  };

  const generatedText = useMemo(() => {
    return text.replaceAll(" ", " 🤸 ");
  }, [text]);

  const handleClear = () => {
    setText("");
  };

  const playVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.currentTime = 0;
      video.play();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setSnackbar({
      message: "Text 🤸 Copied 🤸 Beshy 🤸 Ko",
      show: true,
    });
    playVideo();
  };

  useEffect(() => {
    playVideo();
  }, []);

  return (
    <main className="flex min-h-screen max-w-[500px] mx-auto flex-col items-center mt-10 px-4">
      <h1 className="text-2xl text-center font-bold mb-5">
        Ba't 🤸 Malungkot 🤸 Ang 🤸 Beshy 🤸 Ko 🤸 Generator
      </h1>

      <video width={300} controls ref={videoRef} autoPlay muted>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <textarea
        className="w-full border-[2px] border-slate-300 rounded-lg outline-none p-5 mt-5"
        name=""
        id=""
        cols={30}
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <p className="min-h-[200px] bg-slate-100 w-full mt-2 rounded-lg px-3 py-3">
        {generatedText}
      </p>

      <div className="mt-2 flex w-full bg-white">
        <Button variant="text" disabled={!text.length} onClick={handleClear}>
          Clear
        </Button>
        <Button
          variant="filled"
          className="ml-auto"
          disabled={!text.length}
          onClick={handleCopy}
        >
          Copy
        </Button>
      </div>

      <div className="mt-5 text-center">
        <p>
          Made 🤸 this 🤸 useless 🤸 app 🤸 by 🤸{" "}
          <a
            href="https://topz.dev/"
            className="font-bold text-blue-500"
            target="_blank"
          >
            topzdev
          </a>
        </p>
      </div>

      <Snackbar
        message={snackbar.message}
        show={snackbar.show}
        setShow={onCloseSnackbar}
      />
    </main>
  );
};

export default Content;
