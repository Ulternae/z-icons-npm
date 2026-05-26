import React from 'react';

export interface LanCircleVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleVSolid: React.FC<LanCircleVSolidProps>;
export default LanCircleVSolid;
