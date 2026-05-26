import React from 'react';

export interface LanColumns3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanColumns3Thin: React.FC<LanColumns3ThinProps>;
export default LanColumns3Thin;
