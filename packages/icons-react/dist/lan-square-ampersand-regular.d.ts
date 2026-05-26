import React from 'react';

export interface LanSquareAmpersandRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareAmpersandRegular: React.FC<LanSquareAmpersandRegularProps>;
export default LanSquareAmpersandRegular;
