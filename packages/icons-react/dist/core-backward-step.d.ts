import React from 'react';

export interface CoreBackwardStepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBackwardStep: React.FC<CoreBackwardStepProps>;
export default CoreBackwardStep;
