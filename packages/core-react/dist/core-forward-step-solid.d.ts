import React from 'react';

export interface CoreForwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreForwardStepSolid(props: CoreForwardStepSolidProps): React.ReactElement;
export default CoreForwardStepSolid;
