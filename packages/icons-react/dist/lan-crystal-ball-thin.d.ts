import React from 'react';

export interface LanCrystalBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrystalBallThin: React.FC<LanCrystalBallThinProps>;
export default LanCrystalBallThin;
