import React from 'react';

export interface LanCircleSSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSSolid: React.FC<LanCircleSSolidProps>;
export default LanCircleSSolid;
