import React from 'react';

export interface LanThoughtBubbleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThoughtBubbleSolid: React.FC<LanThoughtBubbleSolidProps>;
export default LanThoughtBubbleSolid;
