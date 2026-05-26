import React from 'react';

export interface LanCornerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCornerThin: React.FC<LanCornerThinProps>;
export default LanCornerThin;
