import React from 'react';

export interface LanPiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPiRegular: React.FC<LanPiRegularProps>;
export default LanPiRegular;
