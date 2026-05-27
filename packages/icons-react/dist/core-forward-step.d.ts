import React from 'react';

export interface CoreForwardStepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreForwardStep: React.FC<CoreForwardStepProps>;
export default CoreForwardStep;
