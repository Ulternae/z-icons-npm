import React from 'react';

export interface CoreWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWaterSolid: React.FC<CoreWaterSolidProps>;
export default CoreWaterSolid;
