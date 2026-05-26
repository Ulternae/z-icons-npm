import React from 'react';

export interface LanTeddyBearRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeddyBearRegular: React.FC<LanTeddyBearRegularProps>;
export default LanTeddyBearRegular;
