import React from 'react';

export interface LanSwordLaserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordLaserThin: React.FC<LanSwordLaserThinProps>;
export default LanSwordLaserThin;
