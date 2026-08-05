import React from 'react';

export interface LanSunriseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunriseSolid(props: LanSunriseSolidProps): React.ReactElement;
export default LanSunriseSolid;
