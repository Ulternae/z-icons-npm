import React from 'react';

export interface LanIdCardAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdCardAltThin: React.FC<LanIdCardAltThinProps>;
export default LanIdCardAltThin;
