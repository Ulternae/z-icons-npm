import React from 'react';

export interface LanGrillFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrillFireSolid(props: LanGrillFireSolidProps): React.ReactElement;
export default LanGrillFireSolid;
