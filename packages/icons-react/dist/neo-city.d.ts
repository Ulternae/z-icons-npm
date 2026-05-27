import React from 'react';

export interface NeoCityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCity: React.FC<NeoCityProps>;
export default NeoCity;
