"use client"
import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Skeleton } from "./ui/skeleton";

export default function ImageSkeleton(props: ImageProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full h-full">
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Skeleton className="w-[200px] h-[20px]" />
                </div>
            )}
            <Image
                {...props}
                onLoad={() => setLoaded(true)}
                className={`${props.className ?? ""} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
            />
        </div>
    );
}