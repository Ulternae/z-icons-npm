import React from 'react';

export interface LanPigRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPigRegular: React.FC<LanPigRegularProps>;
export default LanPigRegular;
