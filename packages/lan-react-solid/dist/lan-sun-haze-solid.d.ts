import React from 'react';

export interface LanSunHazeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunHazeSolid(props: LanSunHazeSolidProps): React.ReactElement;
export default LanSunHazeSolid;
