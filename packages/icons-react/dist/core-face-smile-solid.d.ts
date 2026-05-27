import React from 'react';

export interface CoreFaceSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFaceSmileSolid: React.FC<CoreFaceSmileSolidProps>;
export default CoreFaceSmileSolid;
