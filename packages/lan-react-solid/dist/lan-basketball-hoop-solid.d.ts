import React from 'react';

export interface LanBasketballHoopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBasketballHoopSolid(props: LanBasketballHoopSolidProps): React.ReactElement;
export default LanBasketballHoopSolid;
