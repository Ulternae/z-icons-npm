import React from 'react';

export interface LanCircle6SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle6Solid: React.FC<LanCircle6SolidProps>;
export default LanCircle6Solid;
