import React from 'react';

export interface LanSnowmanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowman: React.FC<LanSnowmanProps>;
export default LanSnowman;
