import React from 'react';

export interface LanCircleAustralSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleAustralSolid: React.FC<LanCircleAustralSolidProps>;
export default LanCircleAustralSolid;
