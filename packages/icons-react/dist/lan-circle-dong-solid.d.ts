import React from 'react';

export interface LanCircleDongSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDongSolid: React.FC<LanCircleDongSolidProps>;
export default LanCircleDongSolid;
