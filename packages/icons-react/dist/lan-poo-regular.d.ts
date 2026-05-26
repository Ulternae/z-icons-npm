import React from 'react';

export interface LanPooRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPooRegular: React.FC<LanPooRegularProps>;
export default LanPooRegular;
