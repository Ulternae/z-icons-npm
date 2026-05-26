import React from 'react';

export interface LanSliderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSliderRegular: React.FC<LanSliderRegularProps>;
export default LanSliderRegular;
