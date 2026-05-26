import React from 'react';

export interface LanPenLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenLineRegular: React.FC<LanPenLineRegularProps>;
export default LanPenLineRegular;
