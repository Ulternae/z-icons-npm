import React from 'react';

export interface LanBellRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellRingSolid(props: LanBellRingSolidProps): React.ReactElement;
export default LanBellRingSolid;
