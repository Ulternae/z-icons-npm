import React from 'react';

export interface LanBinaryCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinaryCircleCheckSolid(props: LanBinaryCircleCheckSolidProps): React.ReactElement;
export default LanBinaryCircleCheckSolid;
