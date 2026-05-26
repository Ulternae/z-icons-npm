import React from 'react';

export interface LanGripDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripDotsSolid: React.FC<LanGripDotsSolidProps>;
export default LanGripDotsSolid;
