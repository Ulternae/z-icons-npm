import React from 'react';

export interface NeoArrowsRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoArrowsRotate: React.FC<NeoArrowsRotateProps>;
export default NeoArrowsRotate;
