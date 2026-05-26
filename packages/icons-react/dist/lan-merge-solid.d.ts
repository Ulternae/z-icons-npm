import React from 'react';

export interface LanMergeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMergeSolid: React.FC<LanMergeSolidProps>;
export default LanMergeSolid;
