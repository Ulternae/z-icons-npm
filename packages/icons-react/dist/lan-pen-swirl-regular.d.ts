import React from 'react';

export interface LanPenSwirlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSwirlRegular: React.FC<LanPenSwirlRegularProps>;
export default LanPenSwirlRegular;
