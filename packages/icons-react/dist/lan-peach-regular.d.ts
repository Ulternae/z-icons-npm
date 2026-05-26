import React from 'react';

export interface LanPeachRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeachRegular: React.FC<LanPeachRegularProps>;
export default LanPeachRegular;
