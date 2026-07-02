import React from 'react';

export interface CoreForwardStepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreForwardStep(props: CoreForwardStepProps): React.ReactElement;
export default CoreForwardStep;
