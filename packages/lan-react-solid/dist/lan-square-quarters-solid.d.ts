import React from 'react';

export interface LanSquareQuartersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQuartersSolid(props: LanSquareQuartersSolidProps): React.ReactElement;
export default LanSquareQuartersSolid;
