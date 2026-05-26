import React from 'react';

export interface LanSquareWRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareWRegular: React.FC<LanSquareWRegularProps>;
export default LanSquareWRegular;
