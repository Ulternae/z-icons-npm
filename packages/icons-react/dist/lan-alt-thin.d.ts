import React from 'react';

export interface LanAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAltThin: React.FC<LanAltThinProps>;
export default LanAltThin;
