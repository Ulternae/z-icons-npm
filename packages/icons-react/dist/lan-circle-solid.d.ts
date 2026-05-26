import React from 'react';

export interface LanCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSolid: React.FC<LanCircleSolidProps>;
export default LanCircleSolid;
