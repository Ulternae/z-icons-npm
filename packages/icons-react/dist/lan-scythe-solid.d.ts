import React from 'react';

export interface LanScytheSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScytheSolid: React.FC<LanScytheSolidProps>;
export default LanScytheSolid;
