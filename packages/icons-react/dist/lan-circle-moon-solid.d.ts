import React from 'react';

export interface LanCircleMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMoonSolid: React.FC<LanCircleMoonSolidProps>;
export default LanCircleMoonSolid;
