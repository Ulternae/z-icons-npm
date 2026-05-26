import React from 'react';

export interface LanIdCardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdCardThin: React.FC<LanIdCardThinProps>;
export default LanIdCardThin;
