import React from 'react';

export interface CoreBackwardStepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBackwardStep(props: CoreBackwardStepProps): React.ReactElement;
export default CoreBackwardStep;
