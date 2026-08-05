import React from 'react';

export interface LanGripDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripDotsSolid(props: LanGripDotsSolidProps): React.ReactElement;
export default LanGripDotsSolid;
