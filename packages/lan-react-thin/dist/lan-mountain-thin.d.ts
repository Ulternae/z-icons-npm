import React from 'react';

export interface LanMountainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountainThin(props: LanMountainThinProps): React.ReactElement;
export default LanMountainThin;
