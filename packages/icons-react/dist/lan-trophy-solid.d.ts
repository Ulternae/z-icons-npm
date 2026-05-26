import React from 'react';

export interface LanTrophySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrophySolid: React.FC<LanTrophySolidProps>;
export default LanTrophySolid;
