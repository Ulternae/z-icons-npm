import React from 'react';

export interface LanSignal5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal5Thin: React.FC<LanSignal5ThinProps>;
export default LanSignal5Thin;
