import React from 'react';

export interface LanMoonStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonStar(props: LanMoonStarProps): React.ReactElement;
export default LanMoonStar;
