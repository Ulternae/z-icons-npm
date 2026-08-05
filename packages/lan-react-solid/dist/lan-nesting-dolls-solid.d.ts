import React from 'react';

export interface LanNestingDollsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNestingDollsSolid(props: LanNestingDollsSolidProps): React.ReactElement;
export default LanNestingDollsSolid;
