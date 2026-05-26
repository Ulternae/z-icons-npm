import React from 'react';

export interface LanLocustThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocustThin: React.FC<LanLocustThinProps>;
export default LanLocustThin;
