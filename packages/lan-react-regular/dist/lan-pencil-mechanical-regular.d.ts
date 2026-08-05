import React from 'react';

export interface LanPencilMechanicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilMechanicalRegular(props: LanPencilMechanicalRegularProps): React.ReactElement;
export default LanPencilMechanicalRegular;
