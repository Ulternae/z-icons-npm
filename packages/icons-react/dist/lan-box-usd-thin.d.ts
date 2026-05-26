import React from 'react';

export interface LanBoxUsdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxUsdThin: React.FC<LanBoxUsdThinProps>;
export default LanBoxUsdThin;
