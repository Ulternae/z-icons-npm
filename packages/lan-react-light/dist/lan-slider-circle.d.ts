import React from 'react';

export interface LanSliderCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSliderCircle(props: LanSliderCircleProps): React.ReactElement;
export default LanSliderCircle;
