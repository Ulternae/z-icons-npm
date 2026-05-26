import React from 'react';

export interface LanSquareRubleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRubleSolid: React.FC<LanSquareRubleSolidProps>;
export default LanSquareRubleSolid;
