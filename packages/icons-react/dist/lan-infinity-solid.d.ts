import React from 'react';

export interface LanInfinitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInfinitySolid: React.FC<LanInfinitySolidProps>;
export default LanInfinitySolid;
