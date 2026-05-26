import React from 'react';

export interface LanDropletDegreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDropletDegree: React.FC<LanDropletDegreeProps>;
export default LanDropletDegree;
