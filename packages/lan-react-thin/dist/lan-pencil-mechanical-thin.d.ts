import React from 'react';

export interface LanPencilMechanicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilMechanicalThin(props: LanPencilMechanicalThinProps): React.ReactElement;
export default LanPencilMechanicalThin;
