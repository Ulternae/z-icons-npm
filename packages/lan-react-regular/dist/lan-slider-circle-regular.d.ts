import React from 'react';

export interface LanSliderCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSliderCircleRegular(props: LanSliderCircleRegularProps): React.ReactElement;
export default LanSliderCircleRegular;
