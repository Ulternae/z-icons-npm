import React from 'react';

export interface CoreUtensilsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUtensils: React.FC<CoreUtensilsProps>;
export default CoreUtensils;
