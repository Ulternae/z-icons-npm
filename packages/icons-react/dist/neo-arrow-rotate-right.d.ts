import React from 'react';

export interface NeoArrowRotateRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoArrowRotateRight: React.FC<NeoArrowRotateRightProps>;
export default NeoArrowRotateRight;
