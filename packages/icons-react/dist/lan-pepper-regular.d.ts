import React from 'react';

export interface LanPepperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPepperRegular: React.FC<LanPepperRegularProps>;
export default LanPepperRegular;
