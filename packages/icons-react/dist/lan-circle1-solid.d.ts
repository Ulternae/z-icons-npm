import React from 'react';

export interface LanCircle1SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle1Solid: React.FC<LanCircle1SolidProps>;
export default LanCircle1Solid;
