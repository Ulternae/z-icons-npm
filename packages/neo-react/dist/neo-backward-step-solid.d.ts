import React from 'react';

export interface NeoBackwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBackwardStepSolid(props: NeoBackwardStepSolidProps): React.ReactElement;
export default NeoBackwardStepSolid;
