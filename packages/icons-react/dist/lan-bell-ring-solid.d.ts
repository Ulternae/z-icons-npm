import React from 'react';

export interface LanBellRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellRingSolid: React.FC<LanBellRingSolidProps>;
export default LanBellRingSolid;
