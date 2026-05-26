import React from 'react';

export interface LanCircle6ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle6Thin: React.FC<LanCircle6ThinProps>;
export default LanCircle6Thin;
