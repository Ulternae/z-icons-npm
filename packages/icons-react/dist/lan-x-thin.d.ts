import React from 'react';

export interface LanXThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXThin: React.FC<LanXThinProps>;
export default LanXThin;
