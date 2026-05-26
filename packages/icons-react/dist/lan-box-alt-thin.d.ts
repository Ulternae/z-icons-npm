import React from 'react';

export interface LanBoxAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxAltThin: React.FC<LanBoxAltThinProps>;
export default LanBoxAltThin;
