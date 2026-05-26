import React from 'react';

export interface LanPenCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenCircleRegular: React.FC<LanPenCircleRegularProps>;
export default LanPenCircleRegular;
