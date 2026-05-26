import React from 'react';

export interface LanSquareEurozoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEurozoneSolid: React.FC<LanSquareEurozoneSolidProps>;
export default LanSquareEurozoneSolid;
