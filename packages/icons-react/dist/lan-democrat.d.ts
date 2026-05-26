import React from 'react';

export interface LanDemocratProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDemocrat: React.FC<LanDemocratProps>;
export default LanDemocrat;
