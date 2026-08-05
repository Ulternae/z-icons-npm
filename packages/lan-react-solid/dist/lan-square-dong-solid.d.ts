import React from 'react';

export interface LanSquareDongSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDongSolid(props: LanSquareDongSolidProps): React.ReactElement;
export default LanSquareDongSolid;
