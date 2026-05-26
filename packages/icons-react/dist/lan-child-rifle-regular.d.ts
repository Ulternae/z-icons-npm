import React from 'react';

export interface LanChildRifleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildRifleRegular: React.FC<LanChildRifleRegularProps>;
export default LanChildRifleRegular;
