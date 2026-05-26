import React from 'react';

export interface LanCircle8ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle8Thin: React.FC<LanCircle8ThinProps>;
export default LanCircle8Thin;
