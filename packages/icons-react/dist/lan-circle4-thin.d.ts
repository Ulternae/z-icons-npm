import React from 'react';

export interface LanCircle4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle4Thin: React.FC<LanCircle4ThinProps>;
export default LanCircle4Thin;
