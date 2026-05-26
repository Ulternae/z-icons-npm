import React from 'react';

export interface LanSirenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSirenRegular: React.FC<LanSirenRegularProps>;
export default LanSirenRegular;
