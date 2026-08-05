import React from 'react';

export interface LanMoonStarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonStarsThin(props: LanMoonStarsThinProps): React.ReactElement;
export default LanMoonStarsThin;
