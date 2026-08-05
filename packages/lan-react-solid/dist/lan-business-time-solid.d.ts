import React from 'react';

export interface LanBusinessTimeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusinessTimeSolid(props: LanBusinessTimeSolidProps): React.ReactElement;
export default LanBusinessTimeSolid;
