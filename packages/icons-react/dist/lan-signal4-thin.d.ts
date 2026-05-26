import React from 'react';

export interface LanSignal4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal4Thin: React.FC<LanSignal4ThinProps>;
export default LanSignal4Thin;
