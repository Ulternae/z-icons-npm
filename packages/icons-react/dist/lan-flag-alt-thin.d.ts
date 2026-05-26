import React from 'react';

export interface LanFlagAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagAltThin: React.FC<LanFlagAltThinProps>;
export default LanFlagAltThin;
