import React from 'react';

export interface LanSirenOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSirenOnSolid(props: LanSirenOnSolidProps): React.ReactElement;
export default LanSirenOnSolid;
