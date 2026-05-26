import React from 'react';

export interface LanSquareUProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareU: React.FC<LanSquareUProps>;
export default LanSquareU;
