import React from 'react';

export interface LanSproutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSproutThin: React.FC<LanSproutThinProps>;
export default LanSproutThin;
