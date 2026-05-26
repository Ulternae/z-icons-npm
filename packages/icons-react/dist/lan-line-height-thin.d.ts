import React from 'react';

export interface LanLineHeightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLineHeightThin: React.FC<LanLineHeightThinProps>;
export default LanLineHeightThin;
