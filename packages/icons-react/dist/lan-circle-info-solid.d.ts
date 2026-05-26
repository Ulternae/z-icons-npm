import React from 'react';

export interface LanCircleInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleInfoSolid: React.FC<LanCircleInfoSolidProps>;
export default LanCircleInfoSolid;
