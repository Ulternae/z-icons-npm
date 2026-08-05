import React from 'react';

export interface LanSquarePollVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePollVerticalSolid(props: LanSquarePollVerticalSolidProps): React.ReactElement;
export default LanSquarePollVerticalSolid;
