import React from 'react';

export interface LanRows3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRows3Thin: React.FC<LanRows3ThinProps>;
export default LanRows3Thin;
