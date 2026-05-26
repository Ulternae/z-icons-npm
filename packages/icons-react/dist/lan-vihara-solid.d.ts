import React from 'react';

export interface LanViharaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanViharaSolid: React.FC<LanViharaSolidProps>;
export default LanViharaSolid;
