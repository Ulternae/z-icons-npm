import React from 'react';

export interface LanH1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH1Thin: React.FC<LanH1ThinProps>;
export default LanH1Thin;
