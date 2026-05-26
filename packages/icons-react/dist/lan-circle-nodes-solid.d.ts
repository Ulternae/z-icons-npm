import React from 'react';

export interface LanCircleNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNodesSolid: React.FC<LanCircleNodesSolidProps>;
export default LanCircleNodesSolid;
