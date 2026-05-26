import React from 'react';

export interface LanWheatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWheatThin: React.FC<LanWheatThinProps>;
export default LanWheatThin;
