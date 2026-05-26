import React from 'react';

export interface LanSquareEuroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEuroSolid: React.FC<LanSquareEuroSolidProps>;
export default LanSquareEuroSolid;
