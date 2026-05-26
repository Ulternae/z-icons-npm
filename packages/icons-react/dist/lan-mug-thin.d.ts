import React from 'react';

export interface LanMugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugThin: React.FC<LanMugThinProps>;
export default LanMugThin;
