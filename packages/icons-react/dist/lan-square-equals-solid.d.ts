import React from 'react';

export interface LanSquareEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEqualsSolid: React.FC<LanSquareEqualsSolidProps>;
export default LanSquareEqualsSolid;
