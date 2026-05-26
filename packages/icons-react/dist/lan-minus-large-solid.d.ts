import React from 'react';

export interface LanMinusLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusLargeSolid: React.FC<LanMinusLargeSolidProps>;
export default LanMinusLargeSolid;
