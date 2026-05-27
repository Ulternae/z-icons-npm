import React from 'react';

export interface NeoForwardStepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoForwardStep: React.FC<NeoForwardStepProps>;
export default NeoForwardStep;
