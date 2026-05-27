import React from 'react';

export interface CoreUtensilsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUtensilsSolid: React.FC<CoreUtensilsSolidProps>;
export default CoreUtensilsSolid;
