"use client";

import UploadImage from "./component/UploadImage";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <UploadImage />
    </div>
  );
}
