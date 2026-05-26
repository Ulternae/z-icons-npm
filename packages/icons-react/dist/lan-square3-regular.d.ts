import React from 'react';

export interface LanSquare3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare3Regular: React.FC<LanSquare3RegularProps>;
export default LanSquare3Regular;
