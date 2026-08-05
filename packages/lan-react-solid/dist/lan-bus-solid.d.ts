import React from 'react';

export interface LanBusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusSolid(props: LanBusSolidProps): React.ReactElement;
export default LanBusSolid;
