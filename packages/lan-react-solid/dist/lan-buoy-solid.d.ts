import React from 'react';

export interface LanBuoySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuoySolid(props: LanBuoySolidProps): React.ReactElement;
export default LanBuoySolid;
