import React from 'react';

export interface LanCarPeopleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarPeopleSolid: React.FC<LanCarPeopleSolidProps>;
export default LanCarPeopleSolid;
