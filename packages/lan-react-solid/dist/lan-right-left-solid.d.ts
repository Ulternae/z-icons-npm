import React from 'react';

export interface LanRightLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRightLeftSolid(props: LanRightLeftSolidProps): React.ReactElement;
export default LanRightLeftSolid;
