import React from 'react';

export interface LanMoonOverSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonOverSunSolid(props: LanMoonOverSunSolidProps): React.ReactElement;
export default LanMoonOverSunSolid;
