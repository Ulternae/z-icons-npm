import React from 'react';

export interface LanSquareVRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareVRegular: React.FC<LanSquareVRegularProps>;
export default LanSquareVRegular;
