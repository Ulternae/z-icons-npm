import React from 'react';

export interface LanTreeCitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeCitySolid: React.FC<LanTreeCitySolidProps>;
export default LanTreeCitySolid;
