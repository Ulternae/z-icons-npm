import React from 'react';

export interface LanSlidersVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersVThin: React.FC<LanSlidersVThinProps>;
export default LanSlidersVThin;
