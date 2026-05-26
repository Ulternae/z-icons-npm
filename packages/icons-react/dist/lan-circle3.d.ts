import React from 'react';

export interface LanCircle3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle3: React.FC<LanCircle3Props>;
export default LanCircle3;
