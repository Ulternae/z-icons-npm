import React from 'react';

export interface LanPenRulerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenRulerRegular: React.FC<LanPenRulerRegularProps>;
export default LanPenRulerRegular;
