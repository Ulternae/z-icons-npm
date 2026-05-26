import React from 'react';

export interface LanBoothCurtainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoothCurtainSolid: React.FC<LanBoothCurtainSolidProps>;
export default LanBoothCurtainSolid;
