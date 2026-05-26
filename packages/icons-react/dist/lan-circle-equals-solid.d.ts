import React from 'react';

export interface LanCircleEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEqualsSolid: React.FC<LanCircleEqualsSolidProps>;
export default LanCircleEqualsSolid;
