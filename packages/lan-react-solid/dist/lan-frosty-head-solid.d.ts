import React from 'react';

export interface LanFrostyHeadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrostyHeadSolid(props: LanFrostyHeadSolidProps): React.ReactElement;
export default LanFrostyHeadSolid;
