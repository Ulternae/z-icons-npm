import React from 'react';

export interface LanHomeLgThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeLgThin: React.FC<LanHomeLgThinProps>;
export default LanHomeLgThin;
