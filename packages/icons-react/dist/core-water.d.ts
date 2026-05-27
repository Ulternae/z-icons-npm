import React from 'react';

export interface CoreWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWater: React.FC<CoreWaterProps>;
export default CoreWater;
