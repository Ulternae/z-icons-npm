import React from 'react';

export interface LanScribbleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScribbleSolid: React.FC<LanScribbleSolidProps>;
export default LanScribbleSolid;
