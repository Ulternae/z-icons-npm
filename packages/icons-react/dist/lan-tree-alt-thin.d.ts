import React from 'react';

export interface LanTreeAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeAltThin: React.FC<LanTreeAltThinProps>;
export default LanTreeAltThin;
