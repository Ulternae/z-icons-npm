import React from 'react';

export interface LanHeartHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartHalfSolid: React.FC<LanHeartHalfSolidProps>;
export default LanHeartHalfSolid;
