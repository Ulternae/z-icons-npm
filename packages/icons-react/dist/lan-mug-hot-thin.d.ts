import React from 'react';

export interface LanMugHotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugHotThin: React.FC<LanMugHotThinProps>;
export default LanMugHotThin;
