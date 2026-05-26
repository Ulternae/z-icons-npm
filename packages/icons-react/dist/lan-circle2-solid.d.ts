import React from 'react';

export interface LanCircle2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle2Solid: React.FC<LanCircle2SolidProps>;
export default LanCircle2Solid;
