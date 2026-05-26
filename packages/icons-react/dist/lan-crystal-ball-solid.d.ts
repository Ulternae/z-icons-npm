import React from 'react';

export interface LanCrystalBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrystalBallSolid: React.FC<LanCrystalBallSolidProps>;
export default LanCrystalBallSolid;
