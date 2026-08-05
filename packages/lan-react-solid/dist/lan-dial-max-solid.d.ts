import React from 'react';

export interface LanDialMaxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMaxSolid(props: LanDialMaxSolidProps): React.ReactElement;
export default LanDialMaxSolid;
