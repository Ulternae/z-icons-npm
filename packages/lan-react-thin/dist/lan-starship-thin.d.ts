import React from 'react';

export interface LanStarshipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarshipThin(props: LanStarshipThinProps): React.ReactElement;
export default LanStarshipThin;
