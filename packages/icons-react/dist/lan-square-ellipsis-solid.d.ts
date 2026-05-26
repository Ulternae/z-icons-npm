import React from 'react';

export interface LanSquareEllipsisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEllipsisSolid: React.FC<LanSquareEllipsisSolidProps>;
export default LanSquareEllipsisSolid;
