import React from 'react';

export interface LanCircleGfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleGfSolid: React.FC<LanCircleGfSolidProps>;
export default LanCircleGfSolid;
