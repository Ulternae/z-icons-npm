import React from 'react';

export interface LanSliderCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSliderCircleThin: React.FC<LanSliderCircleThinProps>;
export default LanSliderCircleThin;
