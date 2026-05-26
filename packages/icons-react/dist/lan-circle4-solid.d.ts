import React from 'react';

export interface LanCircle4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle4Solid: React.FC<LanCircle4SolidProps>;
export default LanCircle4Solid;
