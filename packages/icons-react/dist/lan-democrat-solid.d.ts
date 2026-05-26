import React from 'react';

export interface LanDemocratSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDemocratSolid: React.FC<LanDemocratSolidProps>;
export default LanDemocratSolid;
