import React from 'react';

export interface LanCircleColonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleColonSolid: React.FC<LanCircleColonSolidProps>;
export default LanCircleColonSolid;
