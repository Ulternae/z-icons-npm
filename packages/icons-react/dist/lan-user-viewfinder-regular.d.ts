import React from 'react';

export interface LanUserViewfinderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserViewfinderRegular: React.FC<LanUserViewfinderRegularProps>;
export default LanUserViewfinderRegular;
