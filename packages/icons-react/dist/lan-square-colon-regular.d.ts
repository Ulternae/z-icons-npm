import React from 'react';

export interface LanSquareColonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareColonRegular: React.FC<LanSquareColonRegularProps>;
export default LanSquareColonRegular;
