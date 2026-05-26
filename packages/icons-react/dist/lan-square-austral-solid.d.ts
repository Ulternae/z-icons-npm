import React from 'react';

export interface LanSquareAustralSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareAustralSolid: React.FC<LanSquareAustralSolidProps>;
export default LanSquareAustralSolid;
