import React from 'react';

export interface LanTtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTtySolid: React.FC<LanTtySolidProps>;
export default LanTtySolid;
