import React from 'react';

export interface LanCircleGSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleGSolid: React.FC<LanCircleGSolidProps>;
export default LanCircleGSolid;
