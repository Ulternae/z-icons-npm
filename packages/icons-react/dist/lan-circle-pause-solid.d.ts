import React from 'react';

export interface LanCirclePauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePauseSolid: React.FC<LanCirclePauseSolidProps>;
export default LanCirclePauseSolid;
