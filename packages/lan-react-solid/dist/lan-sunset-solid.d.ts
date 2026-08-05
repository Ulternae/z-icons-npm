import React from 'react';

export interface LanSunsetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunsetSolid(props: LanSunsetSolidProps): React.ReactElement;
export default LanSunsetSolid;
