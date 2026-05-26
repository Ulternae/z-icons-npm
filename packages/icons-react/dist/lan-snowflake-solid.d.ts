import React from 'react';

export interface LanSnowflakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowflakeSolid: React.FC<LanSnowflakeSolidProps>;
export default LanSnowflakeSolid;
