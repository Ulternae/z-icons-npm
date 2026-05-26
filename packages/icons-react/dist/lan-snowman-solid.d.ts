import React from 'react';

export interface LanSnowmanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowmanSolid: React.FC<LanSnowmanSolidProps>;
export default LanSnowmanSolid;
