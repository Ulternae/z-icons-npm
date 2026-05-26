import React from 'react';

export interface LanCircleEllipsisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEllipsisSolid: React.FC<LanCircleEllipsisSolidProps>;
export default LanCircleEllipsisSolid;
