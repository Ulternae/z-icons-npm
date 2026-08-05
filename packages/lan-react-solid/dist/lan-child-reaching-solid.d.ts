import React from 'react';

export interface LanChildReachingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildReachingSolid(props: LanChildReachingSolidProps): React.ReactElement;
export default LanChildReachingSolid;
