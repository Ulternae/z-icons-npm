import React from 'react';

export interface LanBookAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookAltThin: React.FC<LanBookAltThinProps>;
export default LanBookAltThin;
