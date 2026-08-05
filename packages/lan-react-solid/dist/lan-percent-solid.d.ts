import React from 'react';

export interface LanPercentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPercentSolid(props: LanPercentSolidProps): React.ReactElement;
export default LanPercentSolid;
