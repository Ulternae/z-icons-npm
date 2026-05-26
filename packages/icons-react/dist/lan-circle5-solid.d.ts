import React from 'react';

export interface LanCircle5SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle5Solid: React.FC<LanCircle5SolidProps>;
export default LanCircle5Solid;
