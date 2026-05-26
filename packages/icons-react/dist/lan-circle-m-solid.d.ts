import React from 'react';

export interface LanCircleMSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMSolid: React.FC<LanCircleMSolidProps>;
export default LanCircleMSolid;
