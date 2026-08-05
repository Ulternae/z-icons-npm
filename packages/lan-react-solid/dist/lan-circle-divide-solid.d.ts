import React from 'react';

export interface LanCircleDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDivideSolid(props: LanCircleDivideSolidProps): React.ReactElement;
export default LanCircleDivideSolid;
