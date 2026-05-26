import React from 'react';

export interface LanSquareRupeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRupeeSolid: React.FC<LanSquareRupeeSolidProps>;
export default LanSquareRupeeSolid;
