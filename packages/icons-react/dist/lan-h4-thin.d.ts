import React from 'react';

export interface LanH4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH4Thin: React.FC<LanH4ThinProps>;
export default LanH4Thin;
