import React from 'react';

export interface LanInfinitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfinitySolid(props: LanInfinitySolidProps): React.ReactElement;
export default LanInfinitySolid;
