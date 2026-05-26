import React from 'react';

export interface LanEyeDropperHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeDropperHalfSolid: React.FC<LanEyeDropperHalfSolidProps>;
export default LanEyeDropperHalfSolid;
