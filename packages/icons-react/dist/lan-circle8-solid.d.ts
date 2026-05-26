import React from 'react';

export interface LanCircle8SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle8Solid: React.FC<LanCircle8SolidProps>;
export default LanCircle8Solid;
