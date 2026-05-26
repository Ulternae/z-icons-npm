import React from 'react';

export interface LanCirclePlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePlaySolid: React.FC<LanCirclePlaySolidProps>;
export default LanCirclePlaySolid;
