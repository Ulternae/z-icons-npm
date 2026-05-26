import React from 'react';

export interface LanKeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeySolid: React.FC<LanKeySolidProps>;
export default LanKeySolid;
