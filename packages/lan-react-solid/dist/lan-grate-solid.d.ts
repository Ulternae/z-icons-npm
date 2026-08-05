import React from 'react';

export interface LanGrateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrateSolid(props: LanGrateSolidProps): React.ReactElement;
export default LanGrateSolid;
