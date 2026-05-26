import React from 'react';

export interface LanSquareRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRingSolid: React.FC<LanSquareRingSolidProps>;
export default LanSquareRingSolid;
