import React from 'react';

export interface LanSquareNProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareN: React.FC<LanSquareNProps>;
export default LanSquareN;
