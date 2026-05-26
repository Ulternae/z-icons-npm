import React from 'react';

export interface LanShareAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShareAltThin: React.FC<LanShareAltThinProps>;
export default LanShareAltThin;
