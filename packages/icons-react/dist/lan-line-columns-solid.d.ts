import React from 'react';

export interface LanLineColumnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLineColumnsSolid: React.FC<LanLineColumnsSolidProps>;
export default LanLineColumnsSolid;
