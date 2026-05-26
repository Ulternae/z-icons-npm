import React from 'react';

export interface LanSliderCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSliderCircle: React.FC<LanSliderCircleProps>;
export default LanSliderCircle;
