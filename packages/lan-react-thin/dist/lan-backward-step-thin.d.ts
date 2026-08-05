import React from 'react';

export interface LanBackwardStepThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackwardStepThin(props: LanBackwardStepThinProps): React.ReactElement;
export default LanBackwardStepThin;
