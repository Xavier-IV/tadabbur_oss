import {FC} from "react";

type BlobType = {
  x: number;
  y: number;
  trigger: boolean;
  zIndex?: number;
  opacity?: number;
};

export const Blob: FC<BlobType> = ({x, y, trigger, zIndex = 10, opacity = 1}) => {

  return <div
    className={`blob ${!trigger ? 'opacity-0' : 'opacity-0'}`}
    style={{opacity: !trigger ? 0 : opacity, zIndex, top: -125 + y, left: -125 + x}}></div>
}