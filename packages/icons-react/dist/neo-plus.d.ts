import React from 'react';

export interface NeoPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlus: React.FC<NeoPlusProps>;
export default NeoPlus;
