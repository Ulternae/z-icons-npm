import React from 'react';

export interface LanCarKeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarKeySolid: React.FC<LanCarKeySolidProps>;
export default LanCarKeySolid;
