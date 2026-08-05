import React from 'react';

export interface LanUserHairMulletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHairMullet(props: LanUserHairMulletProps): React.ReactElement;
export default LanUserHairMullet;
