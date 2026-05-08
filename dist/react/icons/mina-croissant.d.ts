import React from 'react';

export interface MinaCroissantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCroissant: React.FC<MinaCroissantProps>;
export default MinaCroissant;
