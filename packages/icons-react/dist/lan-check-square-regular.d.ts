import React from 'react';

export interface LanCheckSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckSquareRegular: React.FC<LanCheckSquareRegularProps>;
export default LanCheckSquareRegular;
