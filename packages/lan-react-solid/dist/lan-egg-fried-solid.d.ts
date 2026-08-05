import React from 'react';

export interface LanEggFriedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEggFriedSolid(props: LanEggFriedSolidProps): React.ReactElement;
export default LanEggFriedSolid;
