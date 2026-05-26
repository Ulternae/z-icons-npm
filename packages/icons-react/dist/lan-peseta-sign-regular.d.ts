import React from 'react';

export interface LanPesetaSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPesetaSignRegular: React.FC<LanPesetaSignRegularProps>;
export default LanPesetaSignRegular;
