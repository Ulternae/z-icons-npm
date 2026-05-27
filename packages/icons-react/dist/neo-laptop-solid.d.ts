import React from 'react';

export interface NeoLaptopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLaptopSolid: React.FC<NeoLaptopSolidProps>;
export default NeoLaptopSolid;
