import React from 'react';

export interface LanSwordLaserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordLaser: React.FC<LanSwordLaserProps>;
export default LanSwordLaser;
