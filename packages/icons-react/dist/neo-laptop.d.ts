import React from 'react';

export interface NeoLaptopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLaptop: React.FC<NeoLaptopProps>;
export default NeoLaptop;
