import React from 'react';

export interface NeoUtensilsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoUtensils: React.FC<NeoUtensilsProps>;
export default NeoUtensils;
