import React from 'react';

export interface LanForwardStepThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForwardStepThin(props: LanForwardStepThinProps): React.ReactElement;
export default LanForwardStepThin;
