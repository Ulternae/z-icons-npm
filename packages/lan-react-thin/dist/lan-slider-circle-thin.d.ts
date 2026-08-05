import React from 'react';

export interface LanSliderCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSliderCircleThin(props: LanSliderCircleThinProps): React.ReactElement;
export default LanSliderCircleThin;
