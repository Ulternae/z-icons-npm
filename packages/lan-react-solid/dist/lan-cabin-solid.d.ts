import React from 'react';

export interface LanCabinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCabinSolid(props: LanCabinSolidProps): React.ReactElement;
export default LanCabinSolid;
