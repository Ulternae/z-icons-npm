import React from 'react';

export interface LanH3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH3Thin: React.FC<LanH3ThinProps>;
export default LanH3Thin;
