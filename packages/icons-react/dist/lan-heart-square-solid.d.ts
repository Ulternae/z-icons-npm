import React from 'react';

export interface LanHeartSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartSquareSolid: React.FC<LanHeartSquareSolidProps>;
export default LanHeartSquareSolid;
