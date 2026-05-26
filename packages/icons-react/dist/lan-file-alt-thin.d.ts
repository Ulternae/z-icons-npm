import React from 'react';

export interface LanFileAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAltThin: React.FC<LanFileAltThinProps>;
export default LanFileAltThin;
