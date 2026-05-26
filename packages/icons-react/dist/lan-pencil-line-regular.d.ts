import React from 'react';

export interface LanPencilLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPencilLineRegular: React.FC<LanPencilLineRegularProps>;
export default LanPencilLineRegular;
