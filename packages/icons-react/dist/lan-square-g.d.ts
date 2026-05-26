import React from 'react';

export interface LanSquareGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareG: React.FC<LanSquareGProps>;
export default LanSquareG;
