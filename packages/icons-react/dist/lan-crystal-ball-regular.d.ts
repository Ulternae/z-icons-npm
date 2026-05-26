import React from 'react';

export interface LanCrystalBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrystalBallRegular: React.FC<LanCrystalBallRegularProps>;
export default LanCrystalBallRegular;
