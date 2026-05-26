import React from 'react';

export interface LanSquareWonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareWonRegular: React.FC<LanSquareWonRegularProps>;
export default LanSquareWonRegular;
