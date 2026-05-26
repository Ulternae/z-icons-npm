import React from 'react';

export interface LanSquareXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareXmarkRegular: React.FC<LanSquareXmarkRegularProps>;
export default LanSquareXmarkRegular;
