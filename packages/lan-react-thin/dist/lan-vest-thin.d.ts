import React from 'react';

export interface LanVestThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVestThin(props: LanVestThinProps): React.ReactElement;
export default LanVestThin;
