import React from 'react';

export interface LanCircle3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle3Thin: React.FC<LanCircle3ThinProps>;
export default LanCircle3Thin;
