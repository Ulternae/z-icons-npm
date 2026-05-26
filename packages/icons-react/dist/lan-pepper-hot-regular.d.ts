import React from 'react';

export interface LanPepperHotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPepperHotRegular: React.FC<LanPepperHotRegularProps>;
export default LanPepperHotRegular;
