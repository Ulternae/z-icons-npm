import React from 'react';

export interface LanSaltShakerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaltShakerRegular: React.FC<LanSaltShakerRegularProps>;
export default LanSaltShakerRegular;
