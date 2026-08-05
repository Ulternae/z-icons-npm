import React from 'react';

export interface LanCarOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarOnSolid(props: LanCarOnSolidProps): React.ReactElement;
export default LanCarOnSolid;
