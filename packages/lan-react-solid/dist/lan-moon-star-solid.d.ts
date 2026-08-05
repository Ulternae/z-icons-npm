import React from 'react';

export interface LanMoonStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonStarSolid(props: LanMoonStarSolidProps): React.ReactElement;
export default LanMoonStarSolid;
