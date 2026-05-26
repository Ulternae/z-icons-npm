import React from 'react';

export interface LanPinataRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPinataRegular: React.FC<LanPinataRegularProps>;
export default LanPinataRegular;
