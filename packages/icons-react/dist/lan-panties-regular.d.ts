import React from 'react';

export interface LanPantiesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPantiesRegular: React.FC<LanPantiesRegularProps>;
export default LanPantiesRegular;
