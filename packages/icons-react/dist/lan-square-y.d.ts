import React from 'react';

export interface LanSquareYProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareY: React.FC<LanSquareYProps>;
export default LanSquareY;
