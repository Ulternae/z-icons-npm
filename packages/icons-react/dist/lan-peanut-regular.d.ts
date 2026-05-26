import React from 'react';

export interface LanPeanutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeanutRegular: React.FC<LanPeanutRegularProps>;
export default LanPeanutRegular;
