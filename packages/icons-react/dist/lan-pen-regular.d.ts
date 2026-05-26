import React from 'react';

export interface LanPenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenRegular: React.FC<LanPenRegularProps>;
export default LanPenRegular;
