import React from 'react';

export interface CoreFaceSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFaceSmile: React.FC<CoreFaceSmileProps>;
export default CoreFaceSmile;
