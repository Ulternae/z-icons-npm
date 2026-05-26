import React from 'react';

export interface LanSaxHotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaxHotThin: React.FC<LanSaxHotThinProps>;
export default LanSaxHotThin;
