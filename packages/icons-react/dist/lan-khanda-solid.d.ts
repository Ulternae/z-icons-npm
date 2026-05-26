import React from 'react';

export interface LanKhandaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKhandaSolid: React.FC<LanKhandaSolidProps>;
export default LanKhandaSolid;
