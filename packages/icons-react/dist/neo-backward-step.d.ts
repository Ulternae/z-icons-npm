import React from 'react';

export interface NeoBackwardStepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBackwardStep: React.FC<NeoBackwardStepProps>;
export default NeoBackwardStep;
