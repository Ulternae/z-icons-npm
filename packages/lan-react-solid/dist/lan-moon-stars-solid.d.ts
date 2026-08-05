import React from 'react';

export interface LanMoonStarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonStarsSolid(props: LanMoonStarsSolidProps): React.ReactElement;
export default LanMoonStarsSolid;
