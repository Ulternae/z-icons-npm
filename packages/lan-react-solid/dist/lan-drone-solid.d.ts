import React from 'react';

export interface LanDroneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDroneSolid(props: LanDroneSolidProps): React.ReactElement;
export default LanDroneSolid;
