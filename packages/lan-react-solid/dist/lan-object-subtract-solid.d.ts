import React from 'react';

export interface LanObjectSubtractSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectSubtractSolid(props: LanObjectSubtractSolidProps): React.ReactElement;
export default LanObjectSubtractSolid;
