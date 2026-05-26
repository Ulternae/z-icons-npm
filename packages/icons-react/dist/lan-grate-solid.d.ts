import React from 'react';

export interface LanGrateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrateSolid: React.FC<LanGrateSolidProps>;
export default LanGrateSolid;
