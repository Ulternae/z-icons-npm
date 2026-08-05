import React from 'react';

export interface LanStairCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStairCarSolid(props: LanStairCarSolidProps): React.ReactElement;
export default LanStairCarSolid;
