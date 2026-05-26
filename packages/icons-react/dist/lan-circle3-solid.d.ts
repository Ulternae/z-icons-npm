import React from 'react';

export interface LanCircle3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle3Solid: React.FC<LanCircle3SolidProps>;
export default LanCircle3Solid;
