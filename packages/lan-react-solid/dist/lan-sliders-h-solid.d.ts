import React from 'react';

export interface LanSlidersHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersHSolid(props: LanSlidersHSolidProps): React.ReactElement;
export default LanSlidersHSolid;
