import React from 'react';

export interface LanChildReachingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildReachingRegular(props: LanChildReachingRegularProps): React.ReactElement;
export default LanChildReachingRegular;
