import React from 'react';

export interface LanBackwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackwardStepSolid(props: LanBackwardStepSolidProps): React.ReactElement;
export default LanBackwardStepSolid;
