import React from 'react';

export interface LanEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEqualsSolid: React.FC<LanEqualsSolidProps>;
export default LanEqualsSolid;
