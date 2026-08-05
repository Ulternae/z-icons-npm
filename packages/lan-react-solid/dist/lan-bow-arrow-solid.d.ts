import React from 'react';

export interface LanBowArrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowArrowSolid(props: LanBowArrowSolidProps): React.ReactElement;
export default LanBowArrowSolid;
