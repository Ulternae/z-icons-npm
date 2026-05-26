import React from 'react';

export interface LanSwordLaserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordLaserRegular: React.FC<LanSwordLaserRegularProps>;
export default LanSwordLaserRegular;
