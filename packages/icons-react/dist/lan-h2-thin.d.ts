import React from 'react';

export interface LanH2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH2Thin: React.FC<LanH2ThinProps>;
export default LanH2Thin;
