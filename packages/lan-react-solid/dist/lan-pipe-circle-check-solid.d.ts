import React from 'react';

export interface LanPipeCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeCircleCheckSolid(props: LanPipeCircleCheckSolidProps): React.ReactElement;
export default LanPipeCircleCheckSolid;
