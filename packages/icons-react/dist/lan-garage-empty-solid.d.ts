import React from 'react';

export interface LanGarageEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageEmptySolid: React.FC<LanGarageEmptySolidProps>;
export default LanGarageEmptySolid;
