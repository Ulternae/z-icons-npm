import React from 'react';

export interface LanSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunSolid(props: LanSunSolidProps): React.ReactElement;
export default LanSunSolid;
