import React from 'react';

export interface LanSliderCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSliderCircleRegular: React.FC<LanSliderCircleRegularProps>;
export default LanSliderCircleRegular;
