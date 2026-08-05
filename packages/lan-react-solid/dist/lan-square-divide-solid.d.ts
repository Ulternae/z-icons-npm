import React from 'react';

export interface LanSquareDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDivideSolid(props: LanSquareDivideSolidProps): React.ReactElement;
export default LanSquareDivideSolid;
