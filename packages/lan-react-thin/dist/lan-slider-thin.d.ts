import React from 'react';

export interface LanSliderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSliderThin(props: LanSliderThinProps): React.ReactElement;
export default LanSliderThin;
