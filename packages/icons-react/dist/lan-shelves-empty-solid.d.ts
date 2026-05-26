import React from 'react';

export interface LanShelvesEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShelvesEmptySolid: React.FC<LanShelvesEmptySolidProps>;
export default LanShelvesEmptySolid;
