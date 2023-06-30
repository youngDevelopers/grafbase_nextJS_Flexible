"use client";

import React, { useCallback, useRef, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


const Modal = ({ children }: { children: ReactNode }) => {
    //creating references overlays
    const overlay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);

    //navigation router
    const router = useRouter();

    const onDismiss = useCallback(() => {
      router.push("/");
    }, [router]);

    const handleClick = useCallback(  //useCallback avoids reDeclare of handleClick everytime ..reDeclare if dependencies changes
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlay.current && onDismiss) {
          onDismiss();
        }
      },
      [onDismiss, overlay]
    );

    return (
      <div ref={overlay} className="modal" onClick={(e) => handleClick(e)}>
          {/**Close Button */}
        <button
          type="button"
          onClick={onDismiss}
          className="absolute top-4 right-8"
        >
          <Image src="/close.svg" width={17} height={17} alt="close" />
        </button>
        {/**inner wrapper div */}
        <div ref={wrapper} className="modal_wrapper">
          {children}
        </div>
      </div>
    );
} 

export default Modal
