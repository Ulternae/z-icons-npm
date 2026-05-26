import React from 'react';

export interface LanCircle5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle5Thin: React.FC<LanCircle5ThinProps>;
export default LanCircle5Thin;
