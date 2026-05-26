import React from 'react';

export interface LanSquarePProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareP: React.FC<LanSquarePProps>;
export default LanSquareP;
