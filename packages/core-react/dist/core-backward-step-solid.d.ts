import React from 'react';

export interface CoreBackwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBackwardStepSolid(props: CoreBackwardStepSolidProps): React.ReactElement;
export default CoreBackwardStepSolid;
