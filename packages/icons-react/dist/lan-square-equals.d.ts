import React from 'react';

export interface LanSquareEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEquals: React.FC<LanSquareEqualsProps>;
export default LanSquareEquals;
