import React from 'react';

export interface LanCupcakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupcakeSolid(props: LanCupcakeSolidProps): React.ReactElement;
export default LanCupcakeSolid;
