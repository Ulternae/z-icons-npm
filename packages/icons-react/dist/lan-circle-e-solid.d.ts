import React from 'react';

export interface LanCircleESolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleESolid: React.FC<LanCircleESolidProps>;
export default LanCircleESolid;
