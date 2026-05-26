import React from 'react';

export interface LanGrid5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid5Thin: React.FC<LanGrid5ThinProps>;
export default LanGrid5Thin;
