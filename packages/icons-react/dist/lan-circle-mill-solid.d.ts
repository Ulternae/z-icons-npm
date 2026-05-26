import React from 'react';

export interface LanCircleMillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMillSolid: React.FC<LanCircleMillSolidProps>;
export default LanCircleMillSolid;
