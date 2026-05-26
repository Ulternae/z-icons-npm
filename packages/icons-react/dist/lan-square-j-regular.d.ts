import React from 'react';

export interface LanSquareJRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareJRegular: React.FC<LanSquareJRegularProps>;
export default LanSquareJRegular;
