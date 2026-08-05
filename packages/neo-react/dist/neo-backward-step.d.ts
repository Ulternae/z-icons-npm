import React from 'react';

export interface NeoBackwardStepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBackwardStep(props: NeoBackwardStepProps): React.ReactElement;
export default NeoBackwardStep;
