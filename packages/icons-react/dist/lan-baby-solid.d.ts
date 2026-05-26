import React from 'react';

export interface LanBabySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBabySolid: React.FC<LanBabySolidProps>;
export default LanBabySolid;
