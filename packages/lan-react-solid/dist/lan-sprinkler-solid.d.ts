import React from 'react';

export interface LanSprinklerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprinklerSolid(props: LanSprinklerSolidProps): React.ReactElement;
export default LanSprinklerSolid;
