import React from 'react';

export interface LanSignal3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal3Thin: React.FC<LanSignal3ThinProps>;
export default LanSignal3Thin;
