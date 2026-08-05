import React from 'react';

export interface LanPepperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPepperSolid(props: LanPepperSolidProps): React.ReactElement;
export default LanPepperSolid;
