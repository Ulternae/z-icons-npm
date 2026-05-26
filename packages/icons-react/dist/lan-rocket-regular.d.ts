import React from 'react';

export interface LanRocketRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocketRegular: React.FC<LanRocketRegularProps>;
export default LanRocketRegular;
