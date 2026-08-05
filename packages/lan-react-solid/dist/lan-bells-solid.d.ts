import React from 'react';

export interface LanBellsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellsSolid(props: LanBellsSolidProps): React.ReactElement;
export default LanBellsSolid;
