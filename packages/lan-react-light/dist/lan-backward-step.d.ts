import React from 'react';

export interface LanBackwardStepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackwardStep(props: LanBackwardStepProps): React.ReactElement;
export default LanBackwardStep;
