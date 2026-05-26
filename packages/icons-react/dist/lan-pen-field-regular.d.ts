import React from 'react';

export interface LanPenFieldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenFieldRegular: React.FC<LanPenFieldRegularProps>;
export default LanPenFieldRegular;
