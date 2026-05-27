import React from 'react';

export interface NeoUtensilsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoUtensilsSolid: React.FC<NeoUtensilsSolidProps>;
export default NeoUtensilsSolid;
