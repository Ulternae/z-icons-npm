import React from 'react';

export interface LanSliderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSliderThin: React.FC<LanSliderThinProps>;
export default LanSliderThin;
