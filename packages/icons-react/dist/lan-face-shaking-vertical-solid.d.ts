import React from 'react';

export interface LanFaceShakingVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceShakingVerticalSolid: React.FC<LanFaceShakingVerticalSolidProps>;
export default LanFaceShakingVerticalSolid;
