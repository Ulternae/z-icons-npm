import React from 'react';

export interface LanCircleVideoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleVideoSolid: React.FC<LanCircleVideoSolidProps>;
export default LanCircleVideoSolid;
