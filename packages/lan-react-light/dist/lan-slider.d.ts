import React from 'react';

export interface LanSliderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlider(props: LanSliderProps): React.ReactElement;
export default LanSlider;
