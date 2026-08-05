import React from 'react';

export interface LanForwardStepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForwardStep(props: LanForwardStepProps): React.ReactElement;
export default LanForwardStep;
