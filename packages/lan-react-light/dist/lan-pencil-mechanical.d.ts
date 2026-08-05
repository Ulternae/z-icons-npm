import React from 'react';

export interface LanPencilMechanicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilMechanical(props: LanPencilMechanicalProps): React.ReactElement;
export default LanPencilMechanical;
