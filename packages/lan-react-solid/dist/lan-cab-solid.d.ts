import React from 'react';

export interface LanCabSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCabSolid(props: LanCabSolidProps): React.ReactElement;
export default LanCabSolid;
