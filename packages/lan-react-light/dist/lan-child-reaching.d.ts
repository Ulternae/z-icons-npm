import React from 'react';

export interface LanChildReachingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildReaching(props: LanChildReachingProps): React.ReactElement;
export default LanChildReaching;
