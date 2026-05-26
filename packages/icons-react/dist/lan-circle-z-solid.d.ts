import React from 'react';

export interface LanCircleZSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleZSolid: React.FC<LanCircleZSolidProps>;
export default LanCircleZSolid;
