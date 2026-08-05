import React from 'react';

export interface LanMenorahSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMenorahSolid(props: LanMenorahSolidProps): React.ReactElement;
export default LanMenorahSolid;
