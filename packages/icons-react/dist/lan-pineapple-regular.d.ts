import React from 'react';

export interface LanPineappleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPineappleRegular: React.FC<LanPineappleRegularProps>;
export default LanPineappleRegular;
