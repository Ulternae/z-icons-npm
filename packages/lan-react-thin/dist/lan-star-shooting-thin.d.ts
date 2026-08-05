import React from 'react';

export interface LanStarShootingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarShootingThin(props: LanStarShootingThinProps): React.ReactElement;
export default LanStarShootingThin;
