import React from 'react';

export interface NeoFilterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFilter: React.FC<NeoFilterProps>;
export default NeoFilter;
