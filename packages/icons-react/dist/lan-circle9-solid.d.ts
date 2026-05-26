import React from 'react';

export interface LanCircle9SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle9Solid: React.FC<LanCircle9SolidProps>;
export default LanCircle9Solid;
