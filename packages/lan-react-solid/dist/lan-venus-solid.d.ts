import React from 'react';

export interface LanVenusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVenusSolid(props: LanVenusSolidProps): React.ReactElement;
export default LanVenusSolid;
