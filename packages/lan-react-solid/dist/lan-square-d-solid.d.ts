import React from 'react';

export interface LanSquareDSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDSolid(props: LanSquareDSolidProps): React.ReactElement;
export default LanSquareDSolid;
