import React from 'react';

export interface LanMarsAndVenusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsAndVenusSolid(props: LanMarsAndVenusSolidProps): React.ReactElement;
export default LanMarsAndVenusSolid;
