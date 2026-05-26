import React from 'react';

export interface LanSignHangingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignHangingRegular: React.FC<LanSignHangingRegularProps>;
export default LanSignHangingRegular;
