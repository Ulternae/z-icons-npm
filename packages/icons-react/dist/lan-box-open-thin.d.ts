import React from 'react';

export interface LanBoxOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxOpenThin: React.FC<LanBoxOpenThinProps>;
export default LanBoxOpenThin;
