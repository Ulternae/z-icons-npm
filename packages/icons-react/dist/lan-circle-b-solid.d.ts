import React from 'react';

export interface LanCircleBSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBSolid: React.FC<LanCircleBSolidProps>;
export default LanCircleBSolid;
