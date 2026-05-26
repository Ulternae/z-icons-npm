import React from 'react';

export interface LanSquareFlorinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFlorinRegular: React.FC<LanSquareFlorinRegularProps>;
export default LanSquareFlorinRegular;
