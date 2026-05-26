import React from 'react';

export interface LanSliderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlider: React.FC<LanSliderProps>;
export default LanSlider;
