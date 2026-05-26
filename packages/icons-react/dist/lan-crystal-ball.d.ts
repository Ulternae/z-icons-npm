import React from 'react';

export interface LanCrystalBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrystalBall: React.FC<LanCrystalBallProps>;
export default LanCrystalBall;
