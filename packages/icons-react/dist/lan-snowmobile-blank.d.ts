import React from 'react';

export interface LanSnowmobileBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowmobileBlank: React.FC<LanSnowmobileBlankProps>;
export default LanSnowmobileBlank;
