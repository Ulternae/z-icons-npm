import React from 'react';

export interface LanCircle7SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle7Solid: React.FC<LanCircle7SolidProps>;
export default LanCircle7Solid;
