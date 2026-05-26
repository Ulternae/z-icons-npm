import React from 'react';

export interface LanSquareRingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRingRegular: React.FC<LanSquareRingRegularProps>;
export default LanSquareRingRegular;
