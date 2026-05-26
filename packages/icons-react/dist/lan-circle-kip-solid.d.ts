import React from 'react';

export interface LanCircleKipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleKipSolid: React.FC<LanCircleKipSolidProps>;
export default LanCircleKipSolid;
