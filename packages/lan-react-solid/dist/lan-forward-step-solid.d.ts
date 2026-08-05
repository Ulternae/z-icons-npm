import React from 'react';

export interface LanForwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForwardStepSolid(props: LanForwardStepSolidProps): React.ReactElement;
export default LanForwardStepSolid;
