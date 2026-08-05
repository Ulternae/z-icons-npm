import React from 'react';

export interface LanMoonStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonStarThin(props: LanMoonStarThinProps): React.ReactElement;
export default LanMoonStarThin;
