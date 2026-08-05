import React from 'react';

export interface LanCarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarsSolid(props: LanCarsSolidProps): React.ReactElement;
export default LanCarsSolid;
