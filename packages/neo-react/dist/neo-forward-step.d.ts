import React from 'react';

export interface NeoForwardStepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoForwardStep(props: NeoForwardStepProps): React.ReactElement;
export default NeoForwardStep;
