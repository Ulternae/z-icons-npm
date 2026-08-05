import React from 'react';

export interface LanPencilMechanicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilMechanicalSolid(props: LanPencilMechanicalSolidProps): React.ReactElement;
export default LanPencilMechanicalSolid;
