import React from 'react';

export interface LanCircleCediSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCediSolid: React.FC<LanCircleCediSolidProps>;
export default LanCircleCediSolid;
