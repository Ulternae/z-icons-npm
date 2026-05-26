import React from 'react';

export interface LanUserHairMulletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHairMullet: React.FC<LanUserHairMulletProps>;
export default LanUserHairMullet;
