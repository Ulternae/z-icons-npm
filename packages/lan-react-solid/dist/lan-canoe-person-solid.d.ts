import React from 'react';

export interface LanCanoePersonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCanoePersonSolid(props: LanCanoePersonSolidProps): React.ReactElement;
export default LanCanoePersonSolid;
