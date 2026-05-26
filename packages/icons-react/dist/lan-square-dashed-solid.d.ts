import React from 'react';

export interface LanSquareDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDashedSolid: React.FC<LanSquareDashedSolidProps>;
export default LanSquareDashedSolid;
