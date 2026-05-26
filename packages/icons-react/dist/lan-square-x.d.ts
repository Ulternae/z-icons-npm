import React from 'react';

export interface LanSquareXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareX: React.FC<LanSquareXProps>;
export default LanSquareX;
