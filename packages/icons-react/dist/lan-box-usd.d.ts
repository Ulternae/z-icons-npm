import React from 'react';

export interface LanBoxUsdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxUsd: React.FC<LanBoxUsdProps>;
export default LanBoxUsd;
