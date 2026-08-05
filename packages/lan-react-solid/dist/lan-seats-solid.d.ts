import React from 'react';

export interface LanSeatsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatsSolid(props: LanSeatsSolidProps): React.ReactElement;
export default LanSeatsSolid;
