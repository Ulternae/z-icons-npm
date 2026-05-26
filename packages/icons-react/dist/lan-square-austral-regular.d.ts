import React from 'react';

export interface LanSquareAustralRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareAustralRegular: React.FC<LanSquareAustralRegularProps>;
export default LanSquareAustralRegular;
