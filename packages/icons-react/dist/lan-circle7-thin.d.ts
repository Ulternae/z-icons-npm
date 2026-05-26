import React from 'react';

export interface LanCircle7ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle7Thin: React.FC<LanCircle7ThinProps>;
export default LanCircle7Thin;
