import React from 'react';

export interface LanChildReachingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildReachingThin(props: LanChildReachingThinProps): React.ReactElement;
export default LanChildReachingThin;
