import React from 'react';

export interface LanBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxThin: React.FC<LanBoxThinProps>;
export default LanBoxThin;
