import React from 'react';

export interface LanCircleOSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleOSolid: React.FC<LanCircleOSolidProps>;
export default LanCircleOSolid;
