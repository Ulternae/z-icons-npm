import React from 'react';

export interface LanSignal2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal2Thin: React.FC<LanSignal2ThinProps>;
export default LanSignal2Thin;
