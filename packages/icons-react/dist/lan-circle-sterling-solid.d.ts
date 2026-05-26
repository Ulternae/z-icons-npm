import React from 'react';

export interface LanCircleSterlingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSterlingSolid: React.FC<LanCircleSterlingSolidProps>;
export default LanCircleSterlingSolid;
